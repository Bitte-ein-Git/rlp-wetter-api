const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

// The 87 station IDs that provided full data
const STATION_IDS = [
    "086", "021", "167", "005", "164", "104", "135", "136", "244", "065", "116", "159", "034", "019", "037",
    "078", "007", "198", "018", "010", "155", "169", "039", "081", "154", "025", "165",
    "029", "118", "079", "111", "124", "119", "117", "171", "109", "151", "139", "069", "161", "130", "027",
    "156", "066", "015", "108", "110", "084", "132", "114", "030", "113", "125", "115", "020", "129", "134", "112",
    "090", "095", "013", "133", "061", "098", "147", "158", "160", "077", "052", "093", "094", "012", "011",
    "153", "089", "087", "150", "085", "157", "014", "096", "024", "148", "170", "026", "144", "067", "001",
    "146", "145", "142", "004", "091", "064", "088", "127", "099", "062", "033", "082", "107", "105",
    "122", "137", "123", "101", "074", "016", "080", "083", "017", "031", "121", "073", "076", "120", "072",
    "071", "009", "002", "106", "103", "008", "068", "003", "163", "128", "070", "041", "036", "166", "032",
    "060", "126", "075",
    "023", "006", "028", "022", "149", "174"
];

const DATA_DIR = path.join(__dirname, '..', '..', 'daten');
const ERROR_STRING_SOURCE = "Zur Zeit stehen keine ausreichenden Informationen zur Verfügung!";
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36';

// Helper function for delays
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to parse float/int
const parseNum = (text, isFloat = true) => {
    if (text === null || text === undefined) return null;
    const cleanedText = text.replace(',', '.').trim();
    if (cleanedText === '---' || cleanedText === '') return null;
    return isFloat ? parseFloat(cleanedText) : parseInt(cleanedText, 10);
};

// Main fetch function with retry logic
async function fetchAndParse(stationId, retries = 5) { // Retries set to 5
    // Updated URL with hh=1
    const targetUrl = `https://dlr-web-daten1.aspdienste.de/cgi-bin/wetter.min5.pl?c=9&sid=${stationId}&t=1,2,6,9,7,8&hh=1`;
    
    try {
        const response = await axios.get(targetUrl, {
            headers: { 'User-Agent': USER_AGENT },
            timeout: 10000 // 10s timeout
        });

        if (response.status !== 200) {
            console.error(`[SID ${stationId}] HTTP Error: ${response.status}`);
            return null;
        }

        const html = response.data;
        if (html.includes(ERROR_STRING_SOURCE)) {
            console.error(`[SID ${stationId}] Source error: No data available.`);
            return null;
        }

        const root = parse(html);

        // Get station name and height
        let stationName = "Unbekannt";
        let stationHeight = null;
        const headerCell = root.querySelector('#header table tr:nth-child(3) td:nth-child(2)');
        
        if (headerCell) {
            const fullText = headerCell.structuredText.trim();
            const match = fullText.match(/(.+)\((\d+)\s*m\)/);
            if (match && match[1] && match[2]) {
                stationName = match[1].trim();
                stationHeight = parseInt(match[2], 10);
            } else {
                stationName = fullText;
            }
        }

        // Get data rows
        const rows = root.querySelectorAll('.tableFixHead tbody tr');
        let latestMesswert = null;
        let currentDate = "";

        for (const row of rows) {
            const cells = row.querySelectorAll('td');
            if (cells.length < 9) continue; // Skip header/footer rows

            let datum = cells[0].structuredText.trim().replace('&nbsp;', '');
            const zeit = cells[1].structuredText.trim().replace('&nbsp;', '');

            // Use persisted date if cell is empty
            if (datum) {
                currentDate = datum;
            } else {
                datum = currentDate;
            }

            // Skip summary rows
            if (['Ø', 'Min.', 'Max.', 'Σ', ''].includes(zeit) || !zeit.includes(':')) {
                continue;
            }
            
            // This is the first valid data row (latest measurement)
            latestMesswert = {
                datum: datum,
                zeit: zeit,
                temp_2m_C: parseNum(cells[2].structuredText, true),
                temp_20cm_C: parseNum(cells[3].structuredText, true),
                luftfeuchte_prozent: parseNum(cells[4].structuredText, false),
                wind_ms: parseNum(cells[5].structuredText, true),
                blattnaesse_prozent: parseNum(cells[6].structuredText, false),
                niederschlag_mm: parseNum(cells[7].structuredText, true)
            };
            
            break; // We only want the first (latest) row
        }

        if (!latestMesswert) {
            console.error(`[SID ${stationId}] Parse error: No valid data row found.`);
            return null;
        }

        return {
            station_id: parseInt(stationId, 10),
            station_name: stationName,
            station_height: stationHeight,
            messwerte: [latestMesswert]
        };

    } catch (error) {
        // Handle 429 or other errors with retry
        if (retries > 0) {
            const status = error.response ? error.response.status : 'N/A';
            console.warn(`[SID ${stationId}] Error (Status: ${status}). Retrying in 5s... (${retries - 1} retries left)`);
            await sleep(5000); // Wait 5 seconds
            return fetchAndParse(stationId, retries - 1); // Retry
        }
        
        // Handle other errors after retries exhausted
        const errorMessage = error.response ? `HTTP ${error.response.status}` : error.message;
        console.error(`[SID ${stationId}] Fetch/Parse failed permanently: ${errorMessage}`);
        return null;
    }
}

// Main execution with chunking
async function run() {
    const CHUNK_SIZE = 3; // 3 requests in parallel
    const stationChunks = [];
    
    // Create chunks of station IDs
    for (let i = 0; i < STATION_IDS.length; i += CHUNK_SIZE) {
        stationChunks.push(STATION_IDS.slice(i, i + CHUNK_SIZE));
    }

    console.log(`Starting fetch for ${STATION_IDS.length} stations in ${stationChunks.length} chunks of ${CHUNK_SIZE}...`);

    for (let chunkIndex = 0; chunkIndex < stationChunks.length; chunkIndex++) {
        const chunk = stationChunks[chunkIndex];
        console.log(`Fetching chunk ${chunkIndex + 1}/${stationChunks.length}: [${chunk.join(', ')}]`);
        
        // Fire all promises in the chunk concurrently
        const promises = chunk.map(sid => fetchAndParse(sid));
        const results = await Promise.allSettled(promises);

        // Process results for this chunk
        for (let i = 0; i < results.length; i++) {
            const result = results[i];
            const sid = chunk[i];
            
            if (result.status === 'fulfilled' && result.value) {
                // Success: write file
                const data = result.value;
                const outputPath = path.join(DATA_DIR, `${sid}.json`);
                try {
                    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
                    console.log(`[SID ${sid}] Success: File written.`);
                } catch (writeError) {
                    console.error(`[SID ${sid}] File write error: ${writeError.message}`);
                }
            } else {
                // Failure: Log error and leave old file
                const reason = result.status === 'rejected' ? result.reason.message : 'No data returned';
                console.log(`[SID ${sid}] Skipped: ${reason}. Old file retained.`);
            }
        }
        
        // Wait 10 seconds before starting the next chunk (except for the last one)
        if (chunkIndex < stationChunks.length - 1) {
            console.log(`--- Chunk ${chunkIndex + 1} finished. Waiting 10s... ---`);
            await sleep(5000); // 5s delay
        }
    }
    
    console.log("Fetch process complete.");
}

run();