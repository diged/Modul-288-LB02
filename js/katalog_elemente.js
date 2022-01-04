//PRODUKTE
let produkt1 = {
    "prduktnummer": 101,
    "produktname": "Schoko Donut Pin",
    "farbe": "Schokolade",
    "preis": "CHF 15.-",
}

//PRODUKT 1 AUF PAGE
let htmlObj = document.getElementById("produkt1");
htmlObj.innerHTML =
    `Produktname: ${produkt1.produktname} <br>`+
    `Farbe: ${produkt1.farbe} <br>`+
    `Preis: ${produkt1.preis} <br>`+
    `Produktnummer: ${produkt1.produktnummer} <br>`;