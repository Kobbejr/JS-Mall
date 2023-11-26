//***SÄTTA IHOP STRÄNGAR MED VARIABLER:***

// 1. Med + operator:

let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log(fullName); // Resultat: John Doe

// 2. Med backticks `` (Template literals):

let firstName2 = "John";
let lastName2 = "Doe";

let fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2); // Resultat: John Doe

//---------------------------------------------------------

//***STRÄNGFUNKTIONER:***

// 1. Substring:

let str = "Hello, World!";
let substring = str.substring(0, 5);
console.log(substring); // Resultat: Hello

// 2. toUpperCase:

let lowercase = "hello";
let uppercase = lowercase.toUpperCase();
console.log(uppercase); // Resultat: HELLO

//--------------------------------------------------------------

//***FOR-LOOP FÖR ATT LÄSA ALLA BOKSTÄVER I EN STRÄNG:***

let myString = "JavaScript";

for (let i = 0; i < myString.length; i++) {
  console.log(myString[i]);
}
// Resultat:
// J
// a
// v
// a
// S
// c
// r
// i
// p
// t

//-----------------------------------------------------------

//***PLOCKA UT BOKSTÄVER UR STRÄNGAR MED BRACKET-NOTATION:***

const word = "hej";
const firstLetter = word[0];
console.log(firstLetter); // Resultat: h
