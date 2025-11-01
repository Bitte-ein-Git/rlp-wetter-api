const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { parse } = require('node-html-parser');

// Map station names from HTML to SIDs
// This is necessary because the overview page does not contain SIDs.
const NAME_TO_SID_MAP = {
    "Abentheuer": "044", "Alsheim": "122", "Alzey": "801", "Andernach": "802", "Annweiler": "247",
    "Anschau": "246", "Appenheim": "137", "Avelsbach": "029", "Bacharach": "078",
    "Bad-Neuenahr Ahrweiler": "803", "Bad Bergzabern": "090", "Bad Bergzabern (DWD)": "804",
    "Bad Dürkheim": "095", "Bad Dürkheim (DWD)": "805", "Bad Kreuznach": "007",
    "Bad Kreuznach DLR": "198", "Bad Kreuznach Zentrum": "350", "Bad Kreuznach (DWD)": "806",
    "Bad Marienberg": "807", "Bad Neuenahr": "086", "Baden-Baden-Geroldsau": "808",
    "Baumholder": "046", "Bechtheim": "123", "Berghausen": "023", "Bernkastel-Kues": "118",
    "Beuren": "200", "Bingen-Gaulsheim": "101", "Blankenrath": "809", "Bodenheim": "074",
    "Börfink": "203", "Bonn-Roleber": "810", "Boppard": "079", "Brauneberg": "111",
    "Briedel": "124", "Bruchweiler": "038", "Büchel (Flugplatz)": "811", "Büchelberg": "059",
    "Bundenthal": "204", "Calmont": "119", "Dackenheim": "013", "Dannenfels": "308",
    "Dannstadt": "205", "Darmstadt": "812", "Daxweiler": "252", "Deidesheim-Niederkirchen": "133",
    "Deuselbach": "813", "Dienheim": "016", "Dienstweiler": "018", "Dillenburg": "814",
    "Dolgesheim": "080", "Drais-Finthen": "083", "Dreis-Brück": "021", "Dromersheim": "017",
    "Dümpelfeld": "253", "Dunzweiler": "365", "Edesheim": "061", "Eich": "031", "Einöllen": "201",
    "Eisenach": "167", "Eisenschmitt": "249", "Elkhausen": "045", "Ellern": "042",
    "Ellerstadt": "098", "Elmstein": "227", "Enkenbach": "040", "Entenpfuhl": "233",
    "Esch": "005", "Eußerthal": "215", "Fischbach": "053", "Flomborn": "121", "Frankelbach": "304",
    "Frankenthal- Eppstein": "147", "Frankenthal-Mörsch": "158", "Frankfurt/Main": "816",
    "Frankfurt/Main-Westend": "817", "Freimersheim": "160", "Freinsheim": "077",
    "Gau-Algesheim": "073", "Gauchsberg": "303", "Geisenheim": "818", "Gelsdorf": "164",
    "Gerolstein": "238", "Göcklingen Holzbrühl": "052", "Göllheim": "257", "Gondershausen": "010",
    "Grenzau": "006", "Grünstadt-Asselheim": "093", "Grünstadt-Sausenheim": "094",
    "Guldental": "155", "Gundheim": "076", "Guntersblum": "120", "Hachenburg": "235",
    "Härtlingen": "239", "Hahn": "819", "Hatzenport": "117", "Hausen": "049", "Heidenfahrt": "072",
    "Heimbach-Weis": "028", "Herdorf": "363", "Hermeskeil": "310", "Hersdorf": "056",
    "Herxheimweyher": "012", "Hilgenroth": "820", "Hochspeyer": "302", "Höheinöd": "209",
    "Höhr-Grenzhausen": "237", "Hofgut Serrig": "171", "Hohenleimbach": "315", "Holzbach": "306",
    "Homberg": "208", "Hornbach": "242", "Hortenkopf": "240", "Hümmerich": "821",
    "Hüttgeswasen": "210", "Idar-Oberstein": "822", "Ingelheim": "071", "Isert": "022",
    "Kaiserslautern": "351", "Kaiserslautern (DWD)": "823", "Kall-Sistig": "824",
    "Kaltenborn": "047", "Kanzem": "109", "Kelberg": "251", "Kell am See": "035", "Kettenheim": "009",
    "Kirchberg": "211", "Kirchheimbolanden": "254", "Kirchweiler": "232", "Kirf-Beuren": "212",
    "Klein-Altendorf": "104", "Kleiner Feldberg/Taunus": "825", "Kleinich": "213",
    "Kleinniedesheim": "011", "Klüsserath": "151", "Koblenz": "352", "Körperich": "135",
    "Konz": "139", "Kruft": "136", "Kümbdchen": "169", "Kusel": "214", "Laacher See": "244",
    "Lachen Speyerdorf": "153", "Landau-Nussdorf": "089", "Landau-Wollmesheim": "087",
    "Laumersheim": "150", "Leimersdorf-Nierendorf": "065", "Leisel": "360",
    "Leisel_Forsten": "311", "Leistadt - Kallstadt": "085", "Leiwen": "069",
    "Lennebergwald": "316", "Lennestadt-Theten": "826", "Leutesdorf": "149",
    "Liebenscheid": "207", "Limburgerhof": "157", "Lingerhahn": "216",
    "Löhnberg-Obershausen": "827", "Ludwigshafen-Mundenheim": "353", "Lustadt": "014",
    "Maikammer": "096", "Mainz-Lerchenberg (ZDF)": "828", "Mainz-Marienborn": "002",
    "Mainz-Mombach": "354", "Manderscheid-Sonnenhof": "829", "Mannheim": "830",
    "Maring-Noviand": "161", "Maroth": "243", "Martinshöhe": "024", "Mayen": "130",
    "Mayschoß": "116", "Meckenheim": "148", "Meddersheim": "039", "Mehlingen": "170",
    "Meisburg": "217", "Merzalben": "301", "Merzkirchen": "027", "Montabaur": "831",
    "Morlautern": "026", "Müden": "156", "Mühlacker": "832", "Mülheim-Kärlich": "066",
    "Münstermaifeld": "015", "Mutterstadt": "144", "Nassau": "218", "Nastätten": "833",
    "Neef": "108", "Nentershausen": "245", "Neuhäusel": "364", "Neuhäusel_Forsten": "314",
    "Neumühle": "067", "Neunkirchen-Seelscheid-Krawinkel": "834",
    "Neunkirchen-Wellesweiler": "835", "Neustadt": "001", "Neuwied": "355",
    "Neuwied-Torney": "159", "Nideggen-Schmidt": "836", "Nierstein": "106", "Nittel": "110",
    "Norheim": "081", "Nürburg-Barweiler": "837", "Obermoschel": "258", "Obernhof": "174",
    "Oberwesel": "154", "Oberzerf": "043", "Offenbach-Wetterpark": "838", "Offstein": "103",
    "Olmscheid": "048", "Olsdorf": "839", "Oppenheim": "008", "Oppenheim LA": "068",
    "Ormsheimer Hof": "146", "Perl-Nennig": "840", "Peterslahr": "223",
    "Pforzheim-Ispringen": "841", "Piesport": "084", "Pirmasens": "842",
    "Pirmasens_Innenstadt": "385", "Pölich": "132", "Polch": "220", "Pommern": "114",
    "Reichshof-Eckenhagen": "843", "Rheingönheim": "145", "Rheinstetten": "844", "Riol": "030",
    "Rockenhausen": "259", "Rommersheim": "003", "Runkel-Ennerich": "845", "Ruppertsberg": "142",
    "Ruppertsecken": "846", "Saarbrücken-Burbach": "847", "Saarbrücken-Ensheim": "848",
    "Saulheim": "163", "Schaafheim-Schlierbach": "849", "Schaidt": "305",
    "Schallodenbach": "221", "Schifferstadt": "004", "Schneifelforsthaus": "850",
    "Schwabenheim-Selztal": "128", "Schweigen-Rechtenbach": "091", "Schweighofen": "064",
    "Seesbach": "222", "Selters": "224", "Selzen": "070", "Siebeldingen": "088",
    "Siegen (Kläranlage)": "851", "Simmern-Wahlbach": "852", "Singhofen": "051",
    "Sinzig": "225", "Speicher": "050", "Speyer": "127", "Speyer Nord": "386",
    "Sprendlingen": "041", "Stein": "248", "Steinborn": "034", "Steinweiler": "099",
    "Strickscheid": "019", "Strohn": "226", "Tholey": "853", "Traben-Trarbach": "113",
    "Trebur": "036", "Trier": "357", "Trier-Irsch": "230", "Trier-Petrisberg": "854",
    "Trier-Zewen": "855", "Üxheim": "255", "Ulmen": "057", "Valwig": "125", "Virneburg": "256",
    "Wachenheim": "062", "Waghäusel-Kirrlach": "856", "Wahlbach": "025", "Waibstadt": "857",
    "Waldems-Reinborn": "858", "Wallertheim": "166", "Wallhausen": "165", "Wascheid": "362",
    "Wascheid_Forsten": "312", "Weierhof": "033", "Weilerswist-Lommersum": "859",
    "Weinbiet": "860", "Weisenheim": "082", "Weiskirchen/Saar": "861", "Wershofen": "250",
    "Wicker": "032", "Wiersdorf": "037", "Wiesbaden-Auringen": "862", "Wiesweiler": "107",
    "Winningen": "115", "Wittlich-Bergweiler": "020", "Wöllstein": "060", "Wörth": "359",
    "Wormeldingen": "129", "Worms": "358", "Worms-Leiselheim": "126", "Worms (DWD)": "863",
    "Zell": "134", "Zellertal": "105", "Zeltingen": "112", "Zornheim": "075", "Zweibrücken": "229"
};

const DATA_DIR = path.join(__dirname, '..', '..', 'daten');
const TARGET_URL = 'https://dlr-web-daten1.aspdienste.de/cgi-bin/rlpwetter09.pl?c=9&par=1,5,10,15,16,18';
const USER_AGENT = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/98.0.4758.102 Safari/537.36';

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Helper to parse float/int, handles '–'
const parseNum = (text, isFloat = true) => {
    if (text === null || text === undefined) return null;
    const cleanedText = text.replace(',', '.').trim();
    if (cleanedText === '---' || cleanedText === '–' || cleanedText === '') return null;
    return isFloat ? parseFloat(cleanedText) : parseInt(cleanedText, 10);
};

// Helper to format date string
const formatDate = (dateStr) => {
    // Input format: "01.11.25"
    const parts = dateStr.split('.');
    if (parts.length === 3) {
        // Assume 20xx century
        return `${parts[0]}.${parts[1]}.20${parts[2]}`;
    }
    return dateStr; // Fallback
};

async function fetchHourlyOverview(retries = 5) {
    console.log("Fetching hourly overview page...");
    try {
        const response = await axios.get(TARGET_URL, {
            headers: { 'User-Agent': USER_AGENT },
            timeout: 15000 // 15s timeout
        });

        if (response.status !== 200) {
            throw new Error(`HTTP Error: ${response.status}`);
        }
        
        console.log("Fetch successful. Parsing HTML...");
        const root = parse(response.data);

        // Get timestamp
        const timeNode = root.querySelector('span#dt1');
        if (!timeNode) {
            throw new Error("Could not find timestamp 'span#dt1' in HTML.");
        }
        
        // "01.11.25 - 08:00 Uhr"
        const fullTimeString = timeNode.structuredText.trim();
        const [datePart, timePart] = fullTimeString.split(' - ');
        const datum = formatDate(datePart); // "01.11.2025"
        const zeit = timePart.split(' ')[0]; // "08:00"

        console.log(`Found data for timestamp: ${datum} ${zeit}`);

        const dataRows = root.querySelectorAll('table[cols="7"] tr[style*="background-color:#FFFFFF"]');
        let updateCount = 0;

        for (const row of dataRows) {
            const cells = row.querySelectorAll('td');
            if (cells.length !== 7) continue; // Skip header/footer/region rows

            const stationNameNode = cells[0].querySelector('a.small');
            if (!stationNameNode) continue; // Skip summary rows (Min, Max, Mittelwert)

            const stationName = stationNameNode.structuredText.trim();
            const sid = NAME_TO_SID_MAP[stationName];

            if (!sid) {
                console.warn(`[${stationName}] SID not found in map. Skipping.`);
                continue;
            }

            // Parse values
            const messwert = {
                datum: datum,
                zeit: zeit,
                temp_2m_C: parseNum(cells[1].structuredText, true),
                temp_20cm_C: parseNum(cells[2].structuredText, true),
                niederschlag_mm: parseNum(cells[3].structuredText, true),
                blattnaesse_prozent: parseNum(cells[4].structuredText, false),
                luftfeuchte_prozent: parseNum(cells[5].structuredText, false),
                wind_ms: parseNum(cells[6].structuredText, true)
            };
            
            // Check if any data was actually found (skip rows with only '–')
            const hasData = Object.values(messwert).some(v => v !== null && v !== datum && v !== zeit);
            
            if (!hasData) {
                console.log(`[SID ${sid} / ${stationName}] No data in overview row. Skipping file write.`);
                continue;
            }

            const outputPath = path.join(DATA_DIR, `${sid}.json`);
            let existingData = {
                station_id: parseInt(sid, 10),
                station_name: stationName,
                station_height: null // Height is not in this HTML
            };

            // Try to read existing file to preserve height
            try {
                if (fs.existsSync(outputPath)) {
                    const fileContent = fs.readFileSync(outputPath, 'utf8');
                    const jsonData = JSON.parse(fileContent);
                    existingData.station_height = jsonData.station_height || null;
                    // Ensure name is consistent
                    existingData.station_name = jsonData.station_name || stationName; 
                }
            } catch (readError) {
                console.error(`[SID ${sid}] Error reading existing JSON, will overwrite: ${readError.message}`);
            }

            // Combine and write
            const outputData = {
                ...existingData,
                messwerte: [messwert]
            };

            try {
                fs.writeFileSync(outputPath, JSON.stringify(outputData, null, 2));
                console.log(`[SID ${sid} / ${stationName}] Success: File updated with hourly data.`);
                updateCount++;
            } catch (writeError) {
                console.error(`[SID ${sid} / ${stationName}] File write error: ${writeError.message}`);
            }
        }
        
        console.log(`Fetch process complete. Updated ${updateCount} files.`);

    } catch (error) {
        if (retries > 0) {
            const status = error.response ? error.response.status : 'N/A';
            console.warn(`Error (Status: ${status}). Retrying in 5s... (${retries - 1} retries left)`);
            await sleep(5000);
            return fetchHourlyOverview(retries - 1); // Retry
        } else {
            console.error(`Fetch/Parse failed permanently: ${error.message}`);
            process.exit(1); // Exit with error for GitHub Actions
        }
    }
}

// Run the main function
fetchHourlyOverview();