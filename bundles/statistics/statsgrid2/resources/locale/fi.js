Oskari.registerLocalization({
    "lang": "fi",
    "key": "StatsGrid",
    "value": {
        "title": "Patio",
        "desc": "",
        "tile": {
            "title": "Teemakartat"
        },
        "view": {
            "title": "Patio",
            "message": "patiopoc"
        },
        "tab": {
            "title": "Indikaattorit",
            "description": "Omat indikaattorit",
            "grid": {
                "name": "Otsikko",
                "description": "Kuvaus",
                "organization": "Tietolähde",
                "year": "Vuosi",
                "delete": "Poista"
            },
            "deleteTitle": "Indikaattorin poistaminen",
            "destroyIndicator": "Poista",
            "cancelDelete": "Peruuta",
            "confirmDelete": "Haluatko varmasti poistaa indikaattorin ",
            "newIndicator": "Uusi indikaattori",
            "error": {
                "title": "Virhe",
                "indicatorsError": "Virhe indikaattorien latauksessa. Yritä myöhemmin uudelleen",
                "indicatorError": "Virhe indikaattorin latauksessa. Yritä myöhemmin uudelleen",
                "indicatorDeleteError": "Virhe indikaattorin poistossa. Yritä myöhemmin uudelleen"
            }
        },
        "sex": "Sukupuoli",
        "genders": {
            "male": "miehet",
            "female": "naiset",
            "total": "yhteensä"
        },
        "addColumn": "Hae aineisto",
        "removeColumn": "Poista",
        "indicators": "Indikaattori",
        "cannotDisplayIndicator": "Indikaattorilla ei ole arvoja valitsemallasi aluejaolla, joten sitä ei voida näyttää taulukossa.",
        "availableRegions": " Arvot löytyvät seuraaville aluejaoille: ",
        "year": "Vuosi",
        "buttons": {
            "ok": "OK",
            "cancel": "Peruuta",
            "filter": "Suodata"
        },
        "stats": {
            "municipality": "Kunta",
            "code": "Koodi",
            "errorTitle": "Virhe",
            "regionDataError": "Virhe kuntatietojen haussa statistiikkalähteestä.",
            "regionDataXHRError": "Kuntatietojen haku: virhe yhteydessä statistiikkalähteeseen.",
            "indicatorsDataError": "Virhe indikaattorien haussa statistiikkalähteestä.",
            "indicatorsDataXHRError": "Indikaattorien haku: virhe yhteydessä statistiikkalähteeseen.",
            "indicatorMetaError": "Virhe indikaattorien metadatan haussa statistiikkalähteestä.",
            "indicatorMetaXHRError": "Indikaattorin metadata: virhe yhteydessä statistiikkalähteeseen.",
            "indicatorDataError": "Virhe indikaattorien datan haussa statistiikkalähteestä.",
            "indicatorDataXHRError": "Indikaattorin data: virhe yhteydessä statistiikkalähteeseen.",
            "descriptionTitle": "Indikaattorin kuvaus",
            "sourceTitle": "Indikaattorin lähde"
        },
        "classify": {
            "classify": "Luokittelu",
            "classifymethod": "Luokittelutapa",
            "classes": "Luokkajako",
            "jenks": "Luonnolliset välit",
            "eqinterval": "Tasavälit",
            "quantile": "Kvantiilit",
            "manual": "Luokittelu käsin",
            "manualPlaceholder": "Syötä lukuja pilkulla erotettuna.",
            "manualRangeError": "Lukuja tulee olla vähintään {min} ja enintään {max}!",
            "nanError": "Syöttämäsi arvo ei ole luku!",
            "infoTitle": "Luokittelu käsin",
            "info": "Voit syöttää oman luokittelun pilkuilla erotettuna. Desimaalierottimena toimii piste. Syötä ensin alaraja, sitten luokkarajat ja lopuksi yläraja. Esimerkiksi syöttämällä \"0, 10.5, 24, 30.2, 57, 73.1\" saat viisi luokkaa, jonka ylä- ja alarajat ovat 0 ja 73,1 ja luokkarajat väliin jäävät arvot. Rajojen ulkopuolelle jäävät arvot jätetään huomiotta.",
            "mode": "Luokkarajat",
            "modes": {
                "distinct": "Jatkuva",
                "discontinuous": "Epäjatkuva"
            }
        },
        "colorset": {
            "button": "Värit",
            "flipButton": "Käännä värit",
            "themeselection": "Väriteeman valinta",
            "setselection": "Värisetin valinta",
            "sequential": "Kvantitatiivinen",
            "qualitative": "Kvalitatiivinen",
            "divergent": "Jakautuva",
            "info2": "Värivalinta - valitse osoittimella väriskaalasta värijakso",
            "cancel": "Poistu"

        },
        "statistic": {
            "title": "Tilastomuuttujat",
            "avg": "Keskiarvo",
            "max": "Suurin arvo",
            "mde": "Moodi",
            "mdn": "Mediaani",
            "min": "Pienin arvo",
            "std": "Keskihajonta",
            "sum": "Yhteensä",
            "tooltip": {
                "avg": "Indikaattorin keskiarvo",
                "max": "Suurin indikaattorissa esiintyvä arvo",
                "mde": "Yleisin indikaattorissa esiintyvä arvo",
                "mdn": "Indikaattorin järjestyksessä keskimmäinen arvo",
                "min": "Pienin indikaattorissa esiintyvä arvo",
                "std": "Indikaattorin keskihajonta",
                "sum": "Indikaattorin arvot yhteensä"
            }
        },
        "noIndicatorData": "Indikaattoria ei voi tarkastella tässä aluejaossa",
        "values": "arvoa",
        "included": "Arvot",
        "municipality": "Kunnat",
        "not_included": "Poistettu laskuista",
        "selectRows": "Valitse rivit",
        "select4Municipalities": "Valitse vähintään kaksi aluetta tarkasteluun",
        "showSelected": "Näytä vain valitut alueet taulukossa",
        "noMatch": "Indikaattoria ei löytynyt",
        "selectIndicator": "Valitse indikaattori",
        "noDataSource": "Tietolähdettä ei löytynyt",
        "selectDataSource": "Valitse tietolähde",
        "filterTitle": "Suodata sarakkeen arvoja",
        "indicatorFilterDesc": "Suodattamalla halutut tilastoyksiköt korostuvat taulukossa. Voit asettaa suodatuksen jokaiselle sarakkeelle erikseen.",
        "filterIndicator": "Muuttuja:",
        "filterCondition": "Ehto:",
        "filterSelectCondition": "Valitse ehto",
        "filterGT": "Suurempi (>)",
        "filterGTOE": "Suurempi tai yhtäsuuri (>=)",
        "filterE": "Yhtäsuuri (=)",
        "filterLTOE": "Pienempi tai yhtäsuuri (<=)",
        "filterLT": "Pienempi (<)",
        "filterBetween": "Arvoväli (poissulkeva)",
        "filter": "Suodata",
        "filterByValue": "Arvoilla",
        "filterByRegion": "Alueilla",

        "selectRegionCategory": "Aluejako:",
        "regionCatPlaceholder": "Valitse aluejako",
        "selectRegion": "Alue:",
        "chosenRegionText": "Valitse alueita",
        "noRegionFound": "Aluetta ei löytynyt",
        "regionCategories": {
            "title": "Aluejaot",
            "KUNTA": "Kunta",
            "ALUEHALLINTOVIRASTO": "Aluehallintovirasto",
            "MAAKUNTA": "Maakunta",
            "NUTS1": "Manner-Suomi ja Ahvenanmaa",
            "SAIRAANHOITOPIIRI": "Sairaanhoitopiiri",
            "SEUTUKUNTA": "Seutukunta",
            "SUURALUE": "Suuralue"
        },
        "baseInfoTitle": "Tunnistetiedot",
        "dataTitle": "Aineisto",
        "addDataButton": "Lisää uusi",
        "addDataTitle": "Lisää uusi aineisto",
        "openImportDialogTip": "Tuo arvot leikepöydältä.",
        "openImportDataButton": "Tuo arvot",
        "addDataMetaTitle": "Otsikko",
        "addDataMetaTitlePH": "Indikaattorin otsikko",
        "addDataMetaSources": "Lähde",
        "addDataMetaSourcesPH": "Datan lähdeviittaus",
        "addDataMetaDescription": "Kuvaus",
        "addDataMetaDescriptionPH": "Kuvaus",
        "addDataMetaReferenceLayer": "Aluejako",
        "addDataMetaYear": "Vuosi",
        "addDataMetaYearPH": "Data on vuodelta",
        "addDataMetaPublicity": "Julkaistavissa",
        "municipalityHeader": "Kunnat",
        "dataRows": "Aineistorivit",
        "municipalityPlaceHolder": "Anna arvo",
        "formEmpty": "Tyhjennä",
        "formCancel": "Peruuta",
        "formSubmit": "Tallenna",
        "cancelButton": "Peruuta",
        "clearImportDataButton": "Tyhjennä aineistorivit",
        "importDataButton": "Lisää",
        "popupTitle": "Tuo arvot",
        "importDataDescription": "Voit tuoda kunta - arvo -pareja kopioimalla ne tekstikenttään. \nJokainen kunta omalle rivilleen ja erottimeksi käy tabulaattori, kaksoispiste ja pilkku. \nEsimerkki 1: Alajärvi, 1234 \nEsimerkki 2: 009   2100",
        "failedSubmit": "Lisää indikaattorin metatiedot: ",
        "connectionProblem": "Dataa ei voitu tallentaa yhteysongelman takia.",
        "parsedDataInfo": "Tuotuja alueita oli yhteensä",
        "parsedDataUnrecognized": "Tunnistamattomia alueita",
        "loginToSaveIndicator": "Kirjaudu ensin sisään jos haluat tallentaa aineiston."
    }
});
