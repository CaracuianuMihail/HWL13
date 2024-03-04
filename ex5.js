//Schimbati tipul unui string in number si boolean prin toate metodile pe care le stiti.

    //Funcția parseInt() pentru numere întregi
let stringNumar = "42";
let numar = parseInt(stringNumar); // Convertirea în număr întreg
console.log(numar); // Afiseaza: stringNumar

let stringBool = "true";
let bool = parseInt(stringBool); // Convertirea în număr întreg (va fi NaN)
console.log(bool); // Afiseaza: NaN
    
        //Funcția parseFloat() pentru numere cu zecimale
    
let stringNumber= "3.14";
let number1 = parseFloat(stringNumber); // Convertirea în număr cu zecimale
console.log(number1); // Afiseaza: 3.14

let string_Bool = "false";
let bool1 = parseFloat(string_Bool); // Convertirea în număr cu zecimale (va fi NaN)
console.log(bool1); // Afiseaza: NaN
        
        //Funcția Number():
let stringValue = "42";
let value = Number(stringValue); // Convertirea în număr
console.log(value); // Afiseaza: 42

let stringBool2 = "true";
let bool2 = Number(stringBool2); // Convertirea în număr (va fi NaN)
console.log(bool); // Afiseaza: NaN
    
        // " + " Operator
let stringNmb = "42";
let nmb = +stringNmb; // Convertirea în număr
console.log(nmb); // Afiseaza: 42

let strngBool = "true";
let bool_plus = +strngBool; // Convertirea în număr (va fi NaN)
console.log(bool_plus); // Afiseaza: NaN
    
let stringNumr = "42";
let numr = Boolean(stringNumr); // Convertirea în boolean
console.log(numr); // Afiseaza: true

let stringVid = "";
let vid = Boolean(stringVid); // Convertirea în boolean (false pentru un șir vid)
console.log(vid); // Afiseaza: false