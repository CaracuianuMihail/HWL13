// Schimbati tipul unui number in string si in boolean prin toate metodele pe care le stiti. //

    //Metoda String()
let num = 42;
let numString = String(num);
console.log(numString);

let bool = true;
let boolString = String(bool);
console.log(boolString);

     // " + " Operator

let numar = 42;
let numarString = numar + ""; // Convertirea în șir
console.log(numarString); // Afiseaza: "42"

let bool1 = true;
let boolString1 = bool + ""; // Convertirea în șir
console.log(boolString); // Afiseaza: "true"

     // Constructor Boolean
let number = 42;
let numberBoolean = Boolean(number); // Convertirea în boolean
console.log(numberBoolean); // Afiseaza: true

let numZero = 0;
let numZeroBool = Boolean(numZero); // Convertirea în boolean
console.log(numZeroBool); // Afiseaza: false

let numberString = "Hello";
let numberStringBool = Boolean(numberString); // Convertirea în boolean
console.log(numberStringBool); // Afiseaza: true

// Alternativ, dubla negare pentru a converti în boolean
let bool2 = !!number;
console.log(bool2); // Afiseaza: true