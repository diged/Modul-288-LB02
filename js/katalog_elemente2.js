//PRODUKTLISTE
let produktListe =
    [
        {
            "pid": "produkt1",
            "bildid": "pi1",
            "produktnummer": 101,
            "produktname": "Donut Pin",
            "farbe": "Schokolade",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt2",
            "bildid": "pi2",
            "produktnummer": 102,
            "produktname": "Donut Pin",
            "farbe": "Erdbeer",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Blanc.jpg"
        },
        {
            "pid": "produkt3",
            "bildid": "pi3",
            "produktnummer": 103,
            "produktname": "Donut Pin",
            "farbe": "Vanille",
            "preis": "CHF 15.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt4",
            "bildid": "pi4",
            "produktnummer": 104,
            "produktname": "Donut Tote Bag",
            "farbe": "Schokolade",
            "preis": "CHF 20.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt5",
            "bildid": "pi5",
            "produktnummer": 105,
            "produktname": "Donut Tote Bag",
            "farbe": "Erdbeer",
            "preis": "CHF 20.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt6",
            "bildid": "pi6",
            "produktnummer": 106,
            "produktname": "Donut Tote Bag",
            "farbe": "Vanille",
            "preis": "CHF 20.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt7",
            "bildid": "pi7",
            "produktnummer": 107,
            "produktname": "4er Donut-Box (gemischt)",
            "donutSorten": "Schokolade, Erbeere, Vanille, Caramel",
            "preis": "CHF 12.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt8",
            "bildid": "pi8",
            "produktnummer": 108,
            "produktname": "6er Donut-Box (gemischt)",
            "donutSorten": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
            "preis": "CHF 16.-",
            "path": "../images/Donut_Pin_Schoko.png"
        },
        {
            "pid": "produkt9",
            "bildid": "pi9",
            "produktnummer": 109,
            "produktname": "8er Donut-Box (gemischt)",
            "donutSorten": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
            "preis": "CHF 20.-",
            "path": "../images/Donut_Pin_Schoko.png"
        }
    ];
//PRODUKTE AUF DER KATALOGSEITE
//ERSTE VERSION:
   /* for(let index=0;index < produktListe.length;index++){
        console.log(`${index}`);
        console.log(`${produktListe[index].pid}`);
        let htmlObj = document.getElementById(produktListe[index].pid);
        htmlObj.innerHTML =
            `<b>Produktname:</b> ${produktListe[index].produktname} <br>`+
            `<b>Farbe:</b> ${produktListe[index].farbe} <br>`+
            `<b>Preis:</b> ${produktListe[index].preis} <br>`+
            `<b>Produktnummer:</b> ${produktListe[index].produktnummer} <br>`;
        htmlObj = document.getElementById(produktListe[index].bildid);
        htmlObj.src = produktListe[index].path;
    }*/
//ZWEITE VERSION:
   produktListe.forEach(item => {
        console.log(`${item.pid}`);
        console.log(`${item.pid}`);
        let htmlObj = document.getElementById(item.pid);
        htmlObj.innerHTML =
            `<b>Produktname:</b> ${item.produktname} <br>`+
            `<b>Farbe:</b> ${item.farbe} <br>`+
            `<b>Preis:</b> ${item.preis} <br>`+
            `<b>Produktnummer:</b> ${item.produktnummer} <br>`;
        htmlObj = document.getElementById(item.bildid);
        htmlObj.src = item.path;
    })







