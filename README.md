## Wetterdaten Rheinland-Pfalz

Dieser API Endpunkt dient als Proxy und Parser, um die möglichst **aktuellsten** 5-Minuten-Wetterdaten von einer spezifischen Messstation der [Agrarmeteorologie Rheinland-Pfalz](https://wetter.rlp.de) abzurufen und im JSON-Format bereitzustellen.

## Benutzung

## 1. Home Assistant

Eine W.I.P. Home Assistant Integration ist in meiner GitHub Repo verfügbar:
[Bitte-ein-Git/ha_rlp_wetter](https://github.com/Bitte-ein-Git/ha_rlp_wetter) verfügbar.

### 2. JSON-API
Der Endpunkt ist unter `https://api.heyfordy.de/rlp-wetter` erreichbar und erfordert den URL-Parameter `sid` (Stations-ID).

**URL-Format:**

https://api.heyfordy.de/rlp-wetter?sid=<STATION_ID>

**Beispiel Output:**

```json
{
  "station_id": 123,
  "station_name": "Beispielstadt",
  "station_height": 150,
  "messwerte": [
    {
      "datum": "01.01.2024",
      "zeit": "12:00",
      "temp_2m_C": 10.5,
      "temp_20cm_C": 9.8,
      "luftfeuchte_prozent": 75,
      "wind_ms": 2.1,
      "blattnaesse_prozent": 10,
      "niederschlag_mm": 0.0
    }
  ]
}
```

---

<details>
<summary>Verfügbare Stationen & SIDs</summary>

| Station                                                                                                         | SID                                       |
| :-------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| [Abentheuer](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM044)                          | [044](https://api.heyfordy.de/rlp-wetter?sid=044)            |
| [Alsheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM122)                             | [122](https://api.heyfordy.de/rlp-wetter?sid=122)            |
| [Alzey](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM801)                               | [801](https://api.heyfordy.de/rlp-wetter?sid=801)            |
| [Andernach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM802)                           | [802](https://api.heyfordy.de/rlp-wetter?sid=802)            |
| [Annweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM247)                           | [247](https://api.heyfordy.de/rlp-wetter?sid=247)            |
| [Anschau](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM246)                             | [246](https://api.heyfordy.de/rlp-wetter?sid=246)            |
| [Appenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM137)                           | [137](https://api.heyfordy.de/rlp-wetter?sid=137)            |
| [Avelsbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM029)                           | [029](https://api.heyfordy.de/rlp-wetter?sid=029)            |
| [Bacharach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM078)                           | [078](https://api.heyfordy.de/rlp-wetter?sid=078)            |
| [Bad-Neuenahr Ahrweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM803)              | [803](https://api.heyfordy.de/rlp-wetter?sid=803)            |
| [Bad Bergzabern](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM090)                      | [090](https://api.heyfordy.de/rlp-wetter?sid=090)            |
| [Bad Bergzabern (DWD)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM804)                | [804](https://api.heyfordy.de/rlp-wetter?sid=804)            |
| [Bad Dürkheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM095)                        | [095](https://api.heyfordy.de/rlp-wetter?sid=095)            |
| [Bad Dürkheim (DWD)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM805)                  | [805](https://api.heyfordy.de/rlp-wetter?sid=805)            |
| [Bad Kreuznach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM007)                       | [007](https://api.heyfordy.de/rlp-wetter?sid=007)            |
| [Bad Kreuznach DLR](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM198)                   | [198](https://api.heyfordy.de/rlp-wetter?sid=198)            |
| [Bad Kreuznach Zentrum](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM350)               | [350](https://api.heyfordy.de/rlp-wetter?sid=350)            |
| [Bad Kreuznach (DWD)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM806)                 | [806](https://api.heyfordy.de/rlp-wetter?sid=806)            |
| [Bad Marienberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM807)                      | [807](https://api.heyfordy.de/rlp-wetter?sid=807)            |
| [Bad Neuenahr](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM086)                        | [086](https://api.heyfordy.de/rlp-wetter?sid=086)            |
| [Baden-Baden-Geroldsau](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM808)               | [808](https://api.heyfordy.de/rlp-wetter?sid=808)            |
| [Baumholder](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM046)                          | [046](https://api.heyfordy.de/rlp-wetter?sid=046)            |
| [Bechtheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM123)                           | [123](https://api.heyfordy.de/rlp-wetter?sid=123)            |
| [Berghausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM023)                          | [023](https://api.heyfordy.de/rlp-wetter?sid=023)            |
| [Bernkastel-Kues](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM118)                     | [118](https://api.heyfordy.de/rlp-wetter?sid=118)            |
| [Beuren](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM200)                              | [200](https://api.heyfordy.de/rlp-wetter?sid=200)            |
| [Bingen-Gaulsheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM101)                    | [101](https://api.heyfordy.de/rlp-wetter?sid=101)            |
| [Blankenrath](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM809)                         | [809](https://api.heyfordy.de/rlp-wetter?sid=809)            |
| [Bodenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM074)                           | [074](https://api.heyfordy.de/rlp-wetter?sid=074)            |
| [Börfink](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM203)                             | [203](https://api.heyfordy.de/rlp-wetter?sid=203)            |
| [Bonn-Roleber](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM810)                        | [810](https://api.heyfordy.de/rlp-wetter?sid=810)            |
| [Boppard](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM079)                             | [079](https://api.heyfordy.de/rlp-wetter?sid=079)            |
| [Brauneberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM111)                          | [111](https://api.heyfordy.de/rlp-wetter?sid=111)            |
| [Briedel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM124)                             | [124](https://api.heyfordy.de/rlp-wetter?sid=124)            |
| [Bruchweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM038)                         | [038](https://api.heyfordy.de/rlp-wetter?sid=038)            |
| [Büchel (Flugplatz)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM811)                  | [811](https://api.heyfordy.de/rlp-wetter?sid=811)            |
| [Büchelberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM059)                          | [059](https://api.heyfordy.de/rlp-wetter?sid=059)            |
| [Bundenthal](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM204)                          | [204](https://api.heyfordy.de/rlp-wetter?sid=204)            |
| [Calmont](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM119)                             | [119](https://api.heyfordy.de/rlp-wetter?sid=119)            |
| [Dackenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM013)                          | [013](https://api.heyfordy.de/rlp-wetter?sid=013)            |
| [Dannenfels](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM308)                          | [308](https://api.heyfordy.de/rlp-wetter?sid=308)            |
| [Dannstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM205)                           | [205](https://api.heyfordy.de/rlp-wetter?sid=205)            |
| [Darmstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM812)                           | [812](https://api.heyfordy.de/rlp-wetter?sid=812)            |
| [Daxweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM252)                           | [252](https://api.heyfordy.de/rlp-wetter?sid=252)            |
| [Deidesheim-Niederkirchen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM133)            | [133](https://api.heyfordy.de/rlp-wetter?sid=133)            |
| [Deuselbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM813)                          | [813](https://api.heyfordy.de/rlp-wetter?sid=813)            |
| [Dienheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM016)                            | [016](https://api.heyfordy.de/rlp-wetter?sid=016)            |
| [Dienstweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM018)                        | [018](https://api.heyfordy.de/rlp-wetter?sid=018)            |
| [Dillenburg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM814)                          | [814](https://api.heyfordy.de/rlp-wetter?sid=814)            |
| [Dolgesheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM080)                          | [080](https://api.heyfordy.de/rlp-wetter?sid=080)            |
| [Drais-Finthen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM083)                       | [083](https://api.heyfordy.de/rlp-wetter?sid=083)            |
| [Dreis-Brück](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM021)                         | [021](https://api.heyfordy.de/rlp-wetter?sid=021)            |
| [Dromersheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM017)                         | [017](https://api.heyfordy.de/rlp-wetter?sid=017)            |
| [Dümpelfeld](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM253)                          | [253](https://api.heyfordy.de/rlp-wetter?sid=253)            |
| [Dunzweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM365)                          | [365](https://api.heyfordy.de/rlp-wetter?sid=365)            |
| [Edesheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM061)                            | [061](https://api.heyfordy.de/rlp-wetter?sid=061)            |
| [Eich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM031)                                | [031](https://api.heyfordy.de/rlp-wetter?sid=031)            |
| [Einöllen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM201)                            | [201](https://api.heyfordy.de/rlp-wetter?sid=201)            |
| [Eisenach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM167)                            | [167](https://api.heyfordy.de/rlp-wetter?sid=167)            |
| [Eisenschmitt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM249)                        | [249](https://api.heyfordy.de/rlp-wetter?sid=249)            |
| [Elkhausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM045)                           | [045](https://api.heyfordy.de/rlp-wetter?sid=045)            |
| [Ellern](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM042)                              | [042](https://api.heyfordy.de/rlp-wetter?sid=042)            |
| [Ellerstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM098)                          | [098](https://api.heyfordy.de/rlp-wetter?sid=098)            |
| [Elmstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM227)                            | [227](https://api.heyfordy.de/rlp-wetter?sid=227)            |
| [Enkenbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM040)                           | [040](https://api.heyfordy.de/rlp-wetter?sid=040)            |
| [Entenpfuhl](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM233)                          | [233](https://api.heyfordy.de/rlp-wetter?sid=233)            |
| [Esch](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM005)                                | [005](https://api.heyfordy.de/rlp-wetter?sid=005)            |
| [Eußerthal](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM215)                           | [215](https://api.heyfordy.de/rlp-wetter?sid=215)            |
| [Fischbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM053)                           | [053](https://api.heyfordy.de/rlp-wetter?sid=053)            |
| [Flomborn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM121)                            | [121](https://api.heyfordy.de/rlp-wetter?sid=121)            |
| [Frankelbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM304)                         | [304](https://api.heyfordy.de/rlp-wetter?sid=304)            |
| [Frankenthal- Eppstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM147)               | [147](https://api.heyfordy.de/rlp-wetter?sid=147)            |
| [Frankenthal-Mörsch](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM158)                  | [158](https://api.heyfordy.de/rlp-wetter?sid=158)            |
| [Frankfurt/Main](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM816)                      | [816](https://api.heyfordy.de/rlp-wetter?sid=816)            |
| [Frankfurt/Main-Westend](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM817)              | [817](https://api.heyfordy.de/rlp-wetter?sid=817)            |
| [Freimersheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM160)                        | [160](https://api.heyfordy.de/rlp-wetter?sid=160)            |
| [Freinsheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM077)                          | [077](https://api.heyfordy.de/rlp-wetter?sid=077)            |
| [Gau-Algesheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM073)                       | [073](https://api.heyfordy.de/rlp-wetter?sid=073)            |
| [Gauchsberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM303)                          | [303](https://api.heyfordy.de/rlp-wetter?sid=303)            |
| [Geisenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM818)                          | [818](https://api.heyfordy.de/rlp-wetter?sid=818)            |
| [Gelsdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM164)                            | [164](https://api.heyfordy.de/rlp-wetter?sid=164)            |
| [Gerolstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM238)                          | [238](https://api.heyfordy.de/rlp-wetter?sid=238)            |
| [Göcklingen Holzbrühl](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM052)                | [052](https://api.heyfordy.de/rlp-wetter?sid=052)            |
| [Göllheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM257)                            | [257](https://api.heyfordy.de/rlp-wetter?sid=257)            |
| [Gondershausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM010)                       | [010](https://api.heyfordy.de/rlp-wetter?sid=010)            |
| [Grenzau](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM006)                             | [006](https://api.heyfordy.de/rlp-wetter?sid=006)            |
| [Grünstadt-Asselheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM093)                 | [093](https://api.heyfordy.de/rlp-wetter?sid=093)            |
| [Grünstadt-Sausenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM094)                | [094](https://api.heyfordy.de/rlp-wetter?sid=094)            |
| [Guldental](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM155)                           | [155](https://api.heyfordy.de/rlp-wetter?sid=155)            |
| [Gundheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM076)                            | [076](https://api.heyfordy.de/rlp-wetter?sid=076)            |
| [Guntersblum](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM120)                         | [120](https://api.heyfordy.de/rlp-wetter?sid=120)            |
| [Hachenburg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM235)                          | [235](https://api.heyfordy.de/rlp-wetter?sid=235)            |
| [Härtlingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM239)                          | [239](https://api.heyfordy.de/rlp-wetter?sid=239)            |
| [Hahn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM819)                                | [819](https://api.heyfordy.de/rlp-wetter?sid=819)            |
| [Hatzenport](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM117)                          | [117](https://api.heyfordy.de/rlp-wetter?sid=117)            |
| [Hausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM049)                              | [049](https://api.heyfordy.de/rlp-wetter?sid=049)            |
| [Heidenfahrt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM072)                         | [072](https://api.heyfordy.de/rlp-wetter?sid=072)            |
| [Heimbach-Weis](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM028)                       | [028](https://api.heyfordy.de/rlp-wetter?sid=028)            |
| [Herdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM363)                             | [363](https://api.heyfordy.de/rlp-wetter?sid=363)            |
| [Hermeskeil](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM310)                          | [310](https://api.heyfordy.de/rlp-wetter?sid=310)            |
| [Hersdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM056)                            | [056](https://api.heyfordy.de/rlp-wetter?sid=056)            |
| [Herxheimweyher](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM012)                      | [012](https://api.heyfordy.de/rlp-wetter?sid=012)            |
| [Hilgenroth](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM820)                          | [820](https://api.heyfordy.de/rlp-wetter?sid=820)            |
| [Hochspeyer](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM302)                          | [302](https://api.heyfordy.de/rlp-wetter?sid=302)            |
| [Höheinöd](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM209)                            | [209](https://api.heyfordy.de/rlp-wetter?sid=209)            |
| [Höhr-Grenzhausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM237)                    | [237](https://api.heyfordy.de/rlp-wetter?sid=237)            |
| [Hofgut Serrig](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM171)                       | [171](https://api.heyfordy.de/rlp-wetter?sid=171)            |
| [Hohenleimbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM315)                       | [315](https://api.heyfordy.de/rlp-wetter?sid=315)            |
| [Holzbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM306)                            | [306](https://api.heyfordy.de/rlp-wetter?sid=306)            |
| [Homberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM208)                             | [208](https://api.heyfordy.de/rlp-wetter?sid=208)            |
| [Hornbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM242)                            | [242](https://api.heyfordy.de/rlp-wetter?sid=242)            |
| [Hortenkopf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM240)                          | [240](https://api.heyfordy.de/rlp-wetter?sid=240)            |
| [Hümmerich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM821)                           | [821](https://api.heyfordy.de/rlp-wetter?sid=821)            |
| [Hüttgeswasen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM210)                        | [210](https://api.heyfordy.de/rlp-wetter?sid=210)            |
| [Idar-Oberstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM822)                      | [822](https://api.heyfordy.de/rlp-wetter?sid=822)            |
| [Ingelheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM071)                           | [071](https://api.heyfordy.de/rlp-wetter?sid=071)            |
| [Isert](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM022)                               | [022](https://api.heyfordy.de/rlp-wetter?sid=022)            |
| [Kaiserslautern](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM351)                      | [351](https://api.heyfordy.de/rlp-wetter?sid=351)            |
| [Kaiserslautern (DWD)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM823)                | [823](https://api.heyfordy.de/rlp-wetter?sid=823)            |
| [Kall-Sistig](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM824)                         | [824](https://api.heyfordy.de/rlp-wetter?sid=824)            |
| [Kaltenborn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM047)                          | [047](https://api.heyfordy.de/rlp-wetter?sid=047)            |
| [Kanzem](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM109)                              | [109](https://api.heyfordy.de/rlp-wetter?sid=109)            |
| [Kelberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM251)                             | [251](https://api.heyfordy.de/rlp-wetter?sid=251)            |
| [Kell am See](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM035)                         | [035](https://api.heyfordy.de/rlp-wetter?sid=035)            |
| [Kettenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM009)                          | [009](https://api.heyfordy.de/rlp-wetter?sid=009)            |
| [Kirchberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM211)                           | [211](https://api.heyfordy.de/rlp-wetter?sid=211)            |
| [Kirchheimbolanden](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM254)                   | [254](https://api.heyfordy.de/rlp-wetter?sid=254)            |
| [Kirchweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM232)                         | [232](https://api.heyfordy.de/rlp-wetter?sid=232)            |
| [Kirf-Beuren](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM212)                         | [212](https://api.heyfordy.de/rlp-wetter?sid=212)            |
| [Klein-Altendorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM104)                     | [104](https://api.heyfordy.de/rlp-wetter?sid=104)            |
| [Kleiner Feldberg/Taunus](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM825)             | [825](https://api.heyfordy.de/rlp-wetter?sid=825)            |
| [Kleinich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM213)                            | [213](https://api.heyfordy.de/rlp-wetter?sid=213)            |
| [Kleinniedesheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM011)                     | [011](https://api.heyfordy.de/rlp-wetter?sid=011)            |
| [Klüsserath](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM151)                          | [151](https://api.heyfordy.de/rlp-wetter?sid=151)            |
| [Koblenz](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM352)                             | [352](https://api.heyfordy.de/rlp-wetter?sid=352)            |
| [Körperich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM135)                           | [135](https://api.heyfordy.de/rlp-wetter?sid=135)            |
| [Konz](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM139)                                | [139](https://api.heyfordy.de/rlp-wetter?sid=139)            |
| [Kruft](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM136)                               | [136](https://api.heyfordy.de/rlp-wetter?sid=136)            |
| [Kümbdchen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM169)                           | [169](https://api.heyfordy.de/rlp-wetter?sid=169)            |
| [Kusel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM214)                               | [214](https://api.heyfordy.de/rlp-wetter?sid=214)            |
| [Laacher See](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM244)                         | [244](https://api.heyfordy.de/rlp-wetter?sid=244)            |
| [Lachen Speyerdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM153)                   | [153](https://api.heyfordy.de/rlp-wetter?sid=153)            |
| [Landau-Nussdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM089)                     | [089](https://api.heyfordy.de/rlp-wetter?sid=089)            |
| [Landau-Wollmesheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM087)                  | [087](https://api.heyfordy.de/rlp-wetter?sid=087)            |
| [Laumersheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM150)                         | [150](https://api.heyfordy.de/rlp-wetter?sid=150)            |
| [Leimersdorf-Nierendorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM065)              | [065](https://api.heyfordy.de/rlp-wetter?sid=065)            |
| [Leisel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM360)                              | [360](https://api.heyfordy.de/rlp-wetter?sid=360)            |
| [Leisel_Forsten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM311)                      | [311](https://api.heyfordy.de/rlp-wetter?sid=311)            |
| [Leistadt - Kallstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM085)                | [085](https://api.heyfordy.de/rlp-wetter?sid=085)            |
| [Leiwen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM069)                              | [069](https://api.heyfordy.de/rlp-wetter?sid=069)            |
| [Lennebergwald](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM316)                       | [316](https://api.heyfordy.de/rlp-wetter?sid=316)            |
| [Lennestadt-Theten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM826)                   | [826](https://api.heyfordy.de/rlp-wetter?sid=826)            |
| [Leutesdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM149)                          | [149](https://api.heyfordy.de/rlp-wetter?sid=149)            |
| [Liebenscheid](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM207)                        | [207](https://api.heyfordy.de/rlp-wetter?sid=207)            |
| [Limburgerhof](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM157)                        | [157](https://api.heyfordy.de/rlp-wetter?sid=157)            |
| [Lingerhahn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM216)                          | [216](https://api.heyfordy.de/rlp-wetter?sid=216)            |
| [Löhnberg-Obershausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM827)                | [827](https://api.heyfordy.de/rlp-wetter?sid=827)            |
| [Ludwigshafen-Mundenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM353)             | [353](https://api.heyfordy.de/rlp-wetter?sid=353)            |
| [Lustadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM014)                             | [014](https://api.heyfordy.de/rlp-wetter?sid=014)            |
| [Maikammer](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM096)                           | [096](https://api.heyfordy.de/rlp-wetter?sid=096)            |
| [Mainz-Lerchenberg (ZDF)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM828)             | [828](https://api.heyfordy.de/rlp-wetter?sid=828)            |
| [Mainz-Marienborn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM002)                    | [002](https://api.heyfordy.de/rlp-wetter?sid=002)            |
| [Mainz-Mombach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM354)                       | [354](https://api.heyfordy.de/rlp-wetter?sid=354)            |
| [Manderscheid-Sonnenhof](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM829)              | [829](https://api.heyfordy.de/rlp-wetter?sid=829)            |
| [Mannheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM830)                            | [830](https://api.heyfordy.de/rlp-wetter?sid=830)            |
| [Maring-Noviand](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM161)                      | [161](https://api.heyfordy.de/rlp-wetter?sid=161)            |
| [Maroth](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM243)                              | [243](https://api.heyfordy.de/rlp-wetter?sid=243)            |
| [Martinshöhe](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM024)                         | [024](https://api.heyfordy.de/rlp-wetter?sid=024)            |
| [Mayen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM130)                               | [130](https://api.heyfordy.de/rlp-wetter?sid=130)            |
| [Mayschoß](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM116)                            | [116](https://api.heyfordy.de/rlp-wetter?sid=116)            |
| [Meckenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM148)                          | [148](https://api.heyfordy.de/rlp-wetter?sid=148)            |
| [Meddersheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM039)                         | [039](https://api.heyfordy.de/rlp-wetter?sid=039)            |
| [Mehlingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM170)                           | [170](https://api.heyfordy.de/rlp-wetter?sid=170)            |
| [Meisburg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM217)                            | [217](https://api.heyfordy.de/rlp-wetter?sid=217)            |
| [Merzalben](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM301)                           | [301](https://api.heyfordy.de/rlp-wetter?sid=301)            |
| [Merzkirchen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM027)                         | [027](https://api.heyfordy.de/rlp-wetter?sid=027)            |
| [Montabaur](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM831)                           | [831](https://api.heyfordy.de/rlp-wetter?sid=831)            |
| [Morlautern](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM026)                          | [026](https://api.heyfordy.de/rlp-wetter?sid=026)            |
| [Müden](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM156)                               | [156](https://api.heyfordy.de/rlp-wetter?sid=156)            |
| [Mühlacker](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM832)                           | [832](https://api.heyfordy.de/rlp-wetter?sid=832)            |
| [Mülheim-Kärlich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM066)                     | [066](https://api.heyfordy.de/rlp-wetter?sid=066)            |
| [Münstermaifeld](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM015)                      | [015](https://api.heyfordy.de/rlp-wetter?sid=015)            |
| [Mutterstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM144)                         | [144](https://api.heyfordy.de/rlp-wetter?sid=144)            |
| [Nassau](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM218)                              | [218](https://api.heyfordy.de/rlp-wetter?sid=218)            |
| [Nastätten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM833)                           | [833](https://api.heyfordy.de/rlp-wetter?sid=833)            |
| [Neef](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM108)                                | [108](https://api.heyfordy.de/rlp-wetter?sid=108)            |
| [Nentershausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM245)                       | [245](https://api.heyfordy.de/rlp-wetter?sid=245)            |
| [Neuhäusel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM364)                           | [364](https://api.heyfordy.de/rlp-wetter?sid=364)            |
| [Neuhäusel_Forsten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM314)                   | [314](https://api.heyfordy.de/rlp-wetter?sid=314)            |
| [Neumühle](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM067)                            | [067](https://api.heyfordy.de/rlp-wetter?sid=067)            |
| [Neunkirchen-Seelscheid-Krawinkel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM834)    | [834](https://api.heyfordy.de/rlp-wetter?sid=834)            |
| [Neunkirchen-Wellesweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM835)            | [835](https://api.heyfordy.de/rlp-wetter?sid=835)            |
| [Neustadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM001)                            | [001](https://api.heyfordy.de/rlp-wetter?sid=001)            |
| [Neuwied](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM355)                             | [355](https://api.heyfordy.de/rlp-wetter?sid=355)            |
| [Neuwied-Torney](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM159)                      | [159](https://api.heyfordy.de/rlp-wetter?sid=159)            |
| [Nideggen-Schmidt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM836)                    | [836](https://api.heyfordy.de/rlp-wetter?sid=836)            |
| [Nierstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM106)                           | [106](https://api.heyfordy.de/rlp-wetter?sid=106)            |
| [Nittel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM110)                              | [110](https://api.heyfordy.de/rlp-wetter?sid=110)            |
| [Norheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM081)                             | [081](https://api.heyfordy.de/rlp-wetter?sid=081)            |
| [Nürburg-Barweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM837)                   | [837](https://api.heyfordy.de/rlp-wetter?sid=837)            |
| [Obermoschel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM258)                         | [258](https://api.heyfordy.de/rlp-wetter?sid=258)            |
| [Obernhof](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM174)                            | [174](https://api.heyfordy.de/rlp-wetter?sid=174)            |
| [Oberwesel](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM154)                           | [154](https://api.heyfordy.de/rlp-wetter?sid=154)            |
| [Oberzerf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM043)                            | [043](https://api.heyfordy.de/rlp-wetter?sid=043)            |
| [Offenbach-Wetterpark](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM838)                | [838](https://api.heyfordy.de/rlp-wetter?sid=838)            |
| [Offstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM103)                            | [103](https://api.heyfordy.de/rlp-wetter?sid=103)            |
| [Olmscheid](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM048)                           | [048](https://api.heyfordy.de/rlp-wetter?sid=048)            |
| [Olsdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM839)                             | [839](https://api.heyfordy.de/rlp-wetter?sid=839)            |
| [Oppenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM008)                           | [008](https://api.heyfordy.de/rlp-wetter?sid=008)            |
| [Oppenheim LA](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM068)                        | [068](https://api.heyfordy.de/rlp-wetter?sid=068)            |
| [Ormsheimer Hof](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM146)                      | [146](https://api.heyfordy.de/rlp-wetter?sid=146)            |
| [Perl-Nennig](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM840)                         | [840](https://api.heyfordy.de/rlp-wetter?sid=840)            |
| [Peterslahr](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM223)                          | [223](https://api.heyfordy.de/rlp-wetter?sid=223)            |
| [Pforzheim-Ispringen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM841)                 | [841](https://api.heyfordy.de/rlp-wetter?sid=841)            |
| [Piesport](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM084)                            | [084](https://api.heyfordy.de/rlp-wetter?sid=084)            |
| [Pirmasens](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM842)                           | [842](https://api.heyfordy.de/rlp-wetter?sid=842)            |
| [Pirmasens_Innenstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM385)                | [385](https://api.heyfordy.de/rlp-wetter?sid=385)            |
| [Pölich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM132)                              | [132](https://api.heyfordy.de/rlp-wetter?sid=132)            |
| [Polch](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM220)                               | [220](https://api.heyfordy.de/rlp-wetter?sid=220)            |
| [Pommern](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM114)                             | [114](https://api.heyfordy.de/rlp-wetter?sid=114)            |
| [Reichshof-Eckenhagen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM843)                | [843](https://api.heyfordy.de/rlp-wetter?sid=843)            |
| [Rheingönheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM145)                        | [145](https://api.heyfordy.de/rlp-wetter?sid=145)            |
| [Rheinstetten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM844)                        | [844](https://api.heyfordy.de/rlp-wetter?sid=844)            |
| [Riol](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM030)                                | [030](https://api.heyfordy.de/rlp-wetter?sid=030)            |
| [Rockenhausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM259)                        | [259](https://api.heyfordy.de/rlp-wetter?sid=259)            |
| [Rommersheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM003)                         | [003](https://api.heyfordy.de/rlp-wetter?sid=003)            |
| [Runkel-Ennerich](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM845)                     | [845](https://api.heyfordy.de/rlp-wetter?sid=845)            |
| [Ruppertsberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM142)                        | [142](https://api.heyfordy.de/rlp-wetter?sid=142)            |
| [Ruppertsecken](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM846)                       | [846](https://api.heyfordy.de/rlp-wetter?sid=846)            |
| [Saarbrücken-Burbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM847)                 | [847](https://api.heyfordy.de/rlp-wetter?sid=847)            |
| [Saarbrücken-Ensheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM848)                 | [848](https://api.heyfordy.de/rlp-wetter?sid=848)            |
| [Saulheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM163)                            | [163](https://api.heyfordy.de/rlp-wetter?sid=163)            |
| [Schaafheim-Schlierbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM849)              | [849](https://api.heyfordy.de/rlp-wetter?sid=849)            |
| [Schaidt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM305)                             | [305](https://api.heyfordy.de/rlp-wetter?sid=305)            |
| [Schallodenbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM221)                      | [221](https://api.heyfordy.de/rlp-wetter?sid=221)            |
| [Schifferstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM004)                       | [004](https://api.heyfordy.de/rlp-wetter?sid=004)            |
| [Schneifelforsthaus](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM850)                  | [850](https://api.heyfordy.de/rlp-wetter?sid=850)            |
| [Schwabenheim-Selztal](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM128)                | [128](https://api.heyfordy.de/rlp-wetter?sid=128)            |
| [Schweigen-Rechtenbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM091)               | [091](https://api.heyfordy.de/rlp-wetter?sid=091)            |
| [Schweighofen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM064)                        | [064](https://api.heyfordy.de/rlp-wetter?sid=064)            |
| [Seesbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM222)                            | [222](https://api.heyfordy.de/rlp-wetter?sid=222)            |
| [Selters](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM224)                             | [224](https://api.heyfordy.de/rlp-wetter?sid=224)            |
| [Selzen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM070)                              | [070](https://api.heyfordy.de/rlp-wetter?sid=070)            |
| [Siebeldingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM088)                        | [088](https://api.heyfordy.de/rlp-wetter?sid=088)            |
| [Siegen (Kläranlage)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM851)                 | [851](https://api.heyfordy.de/rlp-wetter?sid=851)            |
| [Simmern-Wahlbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM852)                    | [852](https://api.heyfordy.de/rlp-wetter?sid=852)            |
| [Singhofen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM051)                           | [051](https://api.heyfordy.de/rlp-wetter?sid=051)            |
| [Sinzig](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM225)                              | [225](https://api.heyfordy.de/rlp-wetter?sid=225)            |
| [Speicher](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM050)                            | [050](https://api.heyfordy.de/rlp-wetter?sid=050)            |
| [Speyer](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM127)                              | [127](https://api.heyfordy.de/rlp-wetter?sid=127)            |
| [Speyer Nord](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM386)                         | [386](https://api.heyfordy.de/rlp-wetter?sid=386)            |
| [Sprendlingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM041)                        | [041](https://api.heyfordy.de/rlp-wetter?sid=041)            |
| [Stein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM248)                               | [248](https://api.heyfordy.de/rlp-wetter?sid=248)            |
| [Steinborn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM034)                           | [034](https://api.heyfordy.de/rlp-wetter?sid=034)            |
| [Steinweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM099)                         | [099](https://api.heyfordy.de/rlp-wetter?sid=099)            |
| [Strickscheid](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM019)                        | [019](https://api.heyfordy.de/rlp-wetter?sid=019)            |
| [Strohn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM226)                              | [226](https://api.heyfordy.de/rlp-wetter?sid=226)            |
| [Tholey](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM853)                              | [853](https://api.heyfordy.de/rlp-wetter?sid=853)            |
| [Traben-Trarbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM113)                     | [113](https://api.heyfordy.de/rlp-wetter?sid=113)            |
| [Trebur](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM036)                              | [036](https://api.heyfordy.de/rlp-wetter?sid=036)            |
| [Trier](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM357)                               | [357](https://api.heyfordy.de/rlp-wetter?sid=357)            |
| [Trier-Irsch](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM230)                         | [230](https://api.heyfordy.de/rlp-wetter?sid=230)            |
| [Trier-Petrisberg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM854)                    | [854](https://api.heyfordy.de/rlp-wetter?sid=854)            |
| [Trier-Zewen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM855)                         | [855](https://api.heyfordy.de/rlp-wetter?sid=855)            |
| [Üxheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM255)                              | [255](https://api.heyfordy.de/rlp-wetter?sid=255)            |
| [Ulmen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM057)                               | [057](https://api.heyfordy.de/rlp-wetter?sid=057)            |
| [Valwig](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM125)                              | [125](https://api.heyfordy.de/rlp-wetter?sid=125)            |
| [Virneburg](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM256)                           | [256](https://api.heyfordy.de/rlp-wetter?sid=256)            |
| [Wachenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM062)                          | [062](https://api.heyfordy.de/rlp-wetter?sid=062)            |
| [Waghäusel-Kirrlach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM856)                  | [856](https://api.heyfordy.de/rlp-wetter?sid=856)            |
| [Wahlbach](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM025)                            | [025](https://api.heyfordy.de/rlp-wetter?sid=025)            |
| [Waibstadt](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM857)                           | [857](https://api.heyfordy.de/rlp-wetter?sid=857)            |
| [Waldems-Reinborn](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM858)                    | [858](https://api.heyfordy.de/rlp-wetter?sid=858)            |
| [Wallertheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM166)                         | [166](https://api.heyfordy.de/rlp-wetter?sid=166)            |
| [Wallhausen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM165)                          | [165](https://api.heyfordy.de/rlp-wetter?sid=165)            |
| [Wascheid](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM362)                            | [362](https://api.heyfordy.de/rlp-wetter?sid=362)            |
| [Wascheid_Forsten](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM312)                    | [312](https://api.heyfordy.de/rlp-wetter?sid=312)            |
| [Weierhof](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM033)                            | [033](https://api.heyfordy.de/rlp-wetter?sid=033)            |
| [Weilerswist-Lommersum](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM859)               | [859](https://api.heyfordy.de/rlp-wetter?sid=859)            |
| [Weinbiet](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM860)                            | [860](https://api.heyfordy.de/rlp-wetter?sid=860)            |
| [Weisenheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM082)                          | [082](https://api.heyfordy.de/rlp-wetter?sid=082)            |
| [Weiskirchen/Saar](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM861)                    | [861](https://api.heyfordy.de/rlp-wetter?sid=861)            |
| [Wershofen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM250)                           | [250](https://api.heyfordy.de/rlp-wetter?sid=250)            |
| [Wicker](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM032)                              | [032](https://api.heyfordy.de/rlp-wetter?sid=032)            |
| [Wiersdorf](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM037)                           | [037](https://api.heyfordy.de/rlp-wetter?sid=037)            |
| [Wiesbaden-Auringen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM862)                  | [862](https://api.heyfordy.de/rlp-wetter?sid=862)            |
| [Wiesweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM107)                          | [107](https://api.heyfordy.de/rlp-wetter?sid=107)            |
| [Winningen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM115)                           | [115](https://api.heyfordy.de/rlp-wetter?sid=115)            |
| [Wittlich-Bergweiler](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM020)                 | [020](https://api.heyfordy.de/rlp-wetter?sid=020)            |
| [Wöllstein](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM060)                           | [060](https://api.heyfordy.de/rlp-wetter?sid=060)            |
| [Wörth](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM359)                               | [359](https://api.heyfordy.de/rlp-wetter?sid=359)            |
| [Wormeldingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM129)                        | [129](https://api.heyfordy.de/rlp-wetter?sid=129)            |
| [Worms](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM358)                               | [358](https://api.heyfordy.de/rlp-wetter?sid=358)            |
| [Worms-Leiselheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM126)                    | [126](https://api.heyfordy.de/rlp-wetter?sid=126)            |
| [Worms (DWD)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM863)                         | [863](https://api.heyfordy.de/rlp-wetter?sid=863)            |
| [Zell](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM134)                                | [134](https://api.heyfordy.de/rlp-wetter?sid=134)            |
| [Zellertal](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM105)                           | [105](https://api.heyfordy.de/rlp-wetter?sid=105)            |
| [Zeltingen](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM112)                           | [112](https://api.heyfordy.de/rlp-wetter?sid=112)            |
| [Zornheim](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM075)                            | [075](https://api.heyfordy.de/rlp-wetter?sid=075)            |
| [Zweibrücken](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch/AM229)                         | [229](https://api.heyfordy.de/rlp-wetter?sid=229)            |

</details>

---

## Bekannte Probleme
Leider arbeitet der Scraper für die "5-Minuten-Wetterdaten" sehr langsam und erreicht alle paar Sekunden die Rate Limits, daher kann es manchmal zu Timeouts kommen, bevor alle Daten jeder einzelnen Station abgerufen werden konnten. Als Fallback werden die stündlichen Werte aller Station über einen einzelnen Request abgefragt, dabei wird idR. kein Rate Limit erreicht. Das ist allerdings für die "5-Minuten-Wetterdaten" nicht umsetzbar.

## Datenquelle

Die Wetterdaten stammen von der offiziellen Webseite der Agrarmeteorologie Rheinland-Pfalz.

* **Hauptseite:** [Agrarmeteorologie Rheinland-Pfalz](https://www.wetter.rlp.de/)
* **Offizielle Stationsliste:** [Alle Stationen (Alphabetisch)](https://www.wetter.rlp.de/Agrarmeteorologie/Wetterdaten/Alphabetisch)

Bitte beachte die Nutzungsbedingungen der Originalquelle. Alle Angaben ohne Gewähr.

---

