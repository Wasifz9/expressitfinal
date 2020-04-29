

var englishWords = ["Circumstance", "Responsible", "Immigration", "Colonel", "Lieutenant", "Threshold", "Sibling",
                    "To say goodbye", "To dawn", "Threat", "Manslaughter", "Expunged", "Embarrassment", "Pregnancy", "Parents", 
                    "Relatives", "Resilient", "Onus", "Alibi", "Debunk", "Idle", "Children", "Redacted", "Elope", "Parole",
                   "Escalator", "Fresh produce", "Fingers", "Toes", "Excitement"];

var spanishWords = ["Circumstancia", "Responsable", "Inmigración", "Coronel", "Teniente", "Umbral", "Hermano(a)",
                    "Despedirse", "Amanecer", "Amenaza", "Homicidio involuntario", "Suprimir", "Verguenza", "Embarazo", "Parents", 
                    "Parientes", "Resiliente", "Responsibility", "Coartada", "Desacreditar ridculizar", "Inmóvil", "Niños(as)",
                    "Expurgada", "Casarse a escondidas", "Libertad condicional", "Escalera mecánica", "Verduras frescas", 
                    "Dedos de la manos", "Dedos de los pies", "Exaltación"];


var date = new Date();
var day = date.getDate();
var loc; 


if (day == 31) {
    day = 15;
}

loc = day - 1;


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
