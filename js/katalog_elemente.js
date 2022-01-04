//PRODUKTE
let produkt1 = {
    "produktnummer": 101,
    "produktname": "Schoko Donut Pin",
    "farbe": "Schokolade",
    "preis": "CHF 15.-",
}
let produkt2 = {
    "produktnummer": 102,
    "produktname": "Erdbeer Donut Pin",
    "farbe": "Erdbeer",
    "preis": "CHF 15.-",
}
let produkt3 = {
    "produktnummer": 103,
    "produktname": "Vanille Donut Pin",
    "farbe": "Vanille",
    "preis": "CHF 15.-",
}
let produkt4 = {
    "produktnummer": 104,
    "produktname": "Schoko Donut Tote Bag",
    "farbe": "Schokolade",
    "preis": "CHF 20.-",
}
let produkt5 = {
    "produktnummer": 105,
    "produktname": "Erdbeer Donut Tote Bag",
    "farbe": "Erdbeer",
    "preis": "CHF 20.-",
}
let produkt6 = {
    "produktnummer": 106,
    "produktname": "Vanille Donut Tote Bag",
    "farbe": "Vanille",
    "preis": "CHF 20.-",
}
let produkt7 = {
    "produktnummer": 107,
    "produktname": "4er Donut-Box (gemischt)",
    "donutSorten": "Schokolade, Erbeere, Vanille, Caramel",
    "preis": "CHF 12.-",
}
let produkt8 = {
    "produktnummer": 108,
    "produktname": "6er Donut-Box (gemischt)",
    "donutSorten": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
    "preis": "CHF 16.-",
}
let produkt9 = {
    "produktnummer": 109,
    "produktname": "8er Donut-Box (gemischt)",
    "donutSorten": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
    "preis": "CHF 20.-",
}
let produkt10 = {
    "produktnummer": 110,
    "produktname": "Donut Washi Tape Set",
    "anzahl": "4",
    "preis": "CHF 10.-",
}
let produkt11 = {
    "produktnummer": 111,
    "produktname": "Donut Sticker Set",
    "": "Schokolade, Erbeere, Vanille, Caramel, Marshmallow, Monster",
    "preis": "CHF 8.-",
}
let produkt12 = {
    "produktnummer": 112,
    "produktname": "Donut Keychain (Erbeere)",
    "groesse": "5cm x 5cm",
    "preis": "CHF 15.-",
}

//PRODUKT 1 AUF PAGE
let htmlObj = document.getElementById("produkt1");
htmlObj.innerHTML =
    `Produktname: ${produkt1.produktname} <br>`+
    `Farbe: ${produkt1.farbe} <br>`+
    `Preis: ${produkt1.preis} <br>`+
    `Produktnummer: ${produkt1.produktnummer} <br>`;
//PRODUKT 2 AUF PAGE
htmlObj = document.getElementById("produkt2");
htmlObj.innerHTML =
    `Produktname: ${produkt2.produktname} <br>`+
    `Farbe: ${produkt2.farbe} <br>`+
    `Preis: ${produkt2.preis} <br>`+
    `Produktnummer: ${produkt2.produktnummer} <br>`;
//PRODUKT 3 AUF PAGE
htmlObj = document.getElementById("produkt3");
htmlObj.innerHTML =
    `Produktname: ${produkt3.produktname} <br>`+
    `Farbe: ${produkt3.farbe} <br>`+
    `Preis: ${produkt3.preis} <br>`+
    `Produktnummer: ${produkt3.produktnummer} <br>`;
//PRODUKT 4 AUF PAGE
htmlObj = document.getElementById("produkt4");
htmlObj.innerHTML =
    `Produktname: ${produkt4.produktname} <br>`+
    `Farbe: ${produkt4.farbe} <br>`+
    `Preis: ${produkt4.preis} <br>`+
    `Produktnummer: ${produkt4.produktnummer} <br>`;
//PRODUKT 5 AUF PAGE
htmlObj = document.getElementById("produkt5");
htmlObj.innerHTML =
    `Produktname: ${produkt5.produktname} <br>`+
    `Farbe: ${produkt5.farbe} <br>`+
    `Preis: ${produkt5.preis} <br>`+
    `Produktnummer: ${produkt5.produktnummer} <br>`;
//PRODUKT 6 AUF PAGE
htmlObj = document.getElementById("produkt6");
htmlObj.innerHTML =
    `Produktname: ${produkt6.produktname} <br>`+
    `Farbe: ${produkt6.farbe} <br>`+
    `Preis: ${produkt6.preis} <br>`+
    `Produktnummer: ${produkt6.produktnummer} <br>`;
//PRODUKT 7 AUF PAGE
htmlObj = document.getElementById("produkt7");
htmlObj.innerHTML =
    `Produktname: ${produkt7.produktname} <br>`+
    `Farbe: ${produkt7.farbe} <br>`+
    `Preis: ${produkt7.preis} <br>`+
    `Produktnummer: ${produkt7.produktnummer} <br>`;
//PRODUKT 8 AUF PAGE
htmlObj = document.getElementById("produkt8");
htmlObj.innerHTML =
    `Produktname: ${produkt8.produktname} <br>`+
    `Farbe: ${produkt8.farbe} <br>`+
    `Preis: ${produkt8.preis} <br>`+
    `Produktnummer: ${produkt8.produktnummer} <br>`;
//PRODUKT 9 AUF PAGE
htmlObj = document.getElementById("produkt9");
htmlObj.innerHTML =
    `Produktname: ${produkt9.produktname} <br>`+
    `Farbe: ${produkt9.farbe} <br>`+
    `Preis: ${produkt9.preis} <br>`+
    `Produktnummer: ${produkt9.produktnummer} <br>`;
//PRODUKT 10 AUF PAGE
htmlObj = document.getElementById("produkt10");
htmlObj.innerHTML =
    `Produktname: ${produkt10.produktname} <br>`+
    `Farbe: ${produkt10.farbe} <br>`+
    `Preis: ${produkt10.preis} <br>`+
    `Produktnummer: ${produkt10.produktnummer} <br>`;
//PRODUKT 11 AUF PAGE
htmlObj = document.getElementById("produkt11");
htmlObj.innerHTML =
    `Produktname: ${produkt11.produktname} <br>`+
    `Farbe: ${produkt11.farbe} <br>`+
    `Preis: ${produkt11.preis} <br>`+
    `Produktnummer: ${produkt11.produktnummer} <br>`;
//PRODUKT 12 AUF PAGE
htmlObj = document.getElementById("produkt12");
htmlObj.innerHTML =
    `Produktname: ${produkt12.produktname} <br>`+
    `Farbe: ${produkt12.farbe} <br>`+
    `Preis: ${produkt12.preis} <br>`+
    `Produktnummer: ${produkt12.produktnummer} <br>`;