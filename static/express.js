

var englishWords = ["Circumstance", "Responsible", "Immigration", "Colonel", "Lieutenant", "Threshold", "Sibling",
                    "To say goodbye", "To dawn", "Threat", "Manslaughter", "Expunged"];

var spanishWords = ["Circumstancia", "Responsable", "Inmigración", "Coronel", "Teniente", "Umbral", "Hermano(a)",
                    "Despedirse", "Amanecer", "Amenaza", "Homicidio involuntario", "Suprimir"];


var date = new Date();
var day = date.getDate();
var loc; 

if (day > 12 && day <= 24){
    loc = day - 12;
}

else if (day > 24) {
    day = Math.floor(Math.random() * 12);
}

loc = loc - 1;


function showenglish() {
    var elem = document.getElementById("wordoftheday");
    if (elem.innerHTML =="Word of the Day!") elem.innerHTML = englishWords[loc];
    else elem.innerHTML = "Word of the Day!";
}

function showspanish() {
    var elem = document.getElementById("spanishwordoftheday");
    if (elem.innerHTML =="La Palabra Del Dia!") elem.innerHTML = spanishWords[loc];
    else elem.innerHTML = "La Palabra Del Dia!";
}
