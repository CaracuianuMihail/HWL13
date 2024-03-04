// Creati if/else blocuri si in conditie folositi toate tipurile de falsy value la fel negatia si operatorii boolean AND si OR. //

let value = 0; // In locul lui 0 poate fi folosit: false sau "" sau null sau undefined sau NaN

// Bloc if/else cu condiție care folosește valori false și negație
if (!value) {
    console.log("value este falsy sau zero.");
} else {
    console.log("value este adevărată sau diferită de zero.");
}
// Bloc if/else cu condiție care folosește operatorul AND (&&)
if (value && value !== "") {
    console.log("value este nenulă și nevidă.");
} else {
    console.log("value este nulă sau vidă.");
}
// Bloc if/else cu condiție care folosește operatorul OR (||)
if (value || value === "") {
    console.log("value este nenulă sau vidă.");
} else {
    console.log("value este nulă și nevidă.");
}

// Creati o variabila/constanta folosind ternery operator //
const ora = 18;
const momentulZilei = ora < 12 ? "dimineața" : "după-amiaza";
console.log(`Este ${momentulZilei}.`);


// Creati un switch case in care utilizatorul poate alege un tip de meniu in restaurnat. //
console.log("Bun venit la restaurant! Alegeți un tip de meniu:");
console.log("1. Meniu de prânz");
console.log("2. Meniu de cină");
console.log("3. Meniu pentru copii");
console.log("4. Meniu vegetarian");

let alegere = 3; 
switch (alegere) {
    case 1:
        console.log("Ați ales meniul de prânz: Supă, fel principal, desert.");
        break;
    case 2:
        console.log("Ați ales meniul de cină: Aperitiv, fel principal, băutură.");
        break;
    case 3:
        console.log("Ați ales meniul pentru copii: Nuggets de pui, cartofi prăjiți, suc.");
        break;
    case 4:
        console.log("Ați ales meniul vegetarian: Salată, legume la grătar, smoothie.");
        break;
    default:
        console.log("Alegerea nu este validă. Vă rugăm să alegeți un număr între 1 și 4.");
}


