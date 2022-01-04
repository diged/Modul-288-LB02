//PRODUKTE
let produkt1 = {
    "prduktnummer": 101,
    "produktname": "Schoko Donut Pin",
    "farbe": "Schokolade",
    "preis": "CHF 15.-",
}
let produkt2 = {
    "prduktnummer": 102,
    "produktname": "Erdbeer Donut Pin",
    "farbe": "Erdbeer",
    "preis": "CHF 15.-",
}
let produkt3 = {
    "prduktnummer": 103,
    "produktname": "Vanille Donut Pin",
    "farbe": "Vanille",
    "preis": "CHF 15.-",
}
let produkt4 = {
    "prduktnummer": 104,
    "produktname": "Schoko Donut Tote Bag",
    "farbe": "Schokolade",
    "preis": "CHF 20.-",
}
let produkt5 = {
    "prduktnummer": 105,
    "produktname": "Erdbeer Donut Tote Bag",
    "farbe": "Erdbeer",
    "preis": "CHF 20.-",
}
let produkt6 = {
    "prduktnummer": 106,
    "produktname": "Vanille Donut Tote Bag",
    "farbe": "Vanille",
    "preis": "CHF 20.-",
}

//PRODUKT 1 AUF PAGE
let htmlObj = document.getElementById("produkt1");
htmlObj.innerHTML =
    `Produktname: ${produkt1.produktname} <br>`+
    `Farbe: ${produkt1.farbe} <br>`+
    `Preis: ${produkt1.preis} <br>`+
    `Produktnummer: ${produkt1.produktnummer} <br>`;
//PRODUKT 2 AUF PAGE
let htmlObj = document.getElementById("produkt2");
htmlObj.innerHTML =
    `Produktname: ${produkt2.produktname} <br>`+
    `Farbe: ${produkt2.farbe} <br>`+
    `Preis: ${produkt2.preis} <br>`+
    `Produktnummer: ${produkt2.produktnummer} <br>`;
//PRODUKT 3 AUF PAGE
let htmlObj = document.getElementById("produkt3");
htmlObj.innerHTML =
    `Produktname: ${produkt3.produktname} <br>`+
    `Farbe: ${produkt3.farbe} <br>`+
    `Preis: ${produkt3.preis} <br>`+
    `Produktnummer: ${produkt3.produktnummer} <br>`;