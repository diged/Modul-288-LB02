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