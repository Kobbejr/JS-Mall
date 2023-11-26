//***SKAPA FUNKTIONER FÖR ATT ÅTERANVÄNDA KOD:***

// 1. Funktion utan parameter
function greet() {
  console.log("Hej, välkommen!");
}

// Anropa funktionen
greet();

// 2. Funktion med parameter
function greetPerson(name) {
  console.log("Hej, " + name + "!");
}

// Anropa funktionen med argument
greetPerson("Alice"); // Resultat: Hej, Alice!
greetPerson("Bob"); // Resultat: Hej, Bob!

//-------------------------------------------------------

//***SKAPA ARROW FUNKTIONER***

// Arrow-funktion utan parameter
const sayHello = () => {
  console.log("Hello!");
};

// Arrow-funktion med parameter
const greetPerson = (name) => {
  console.log("Hello, " + name + "!");
};

// Arrow-funktion med enbart en parameter (kan lämna bort parenteserna)
const square = (x) => x * x;

// Anropa arrow-funktioner
sayHello(); // Resultat: Hello!
greetPerson("Charlie"); // Resultat: Hello, Charlie!
console.log(square(5)); // Resultat: 25

//--------------------------------------------------------------

//***SCOPE OCH VARIABLER***

let globalVariable = "Jag är global"; // Global variabel

function exampleFunction() {
  let localVariable = "Jag är lokal"; // Lokal variabel, synlig inuti funktionen
  console.log(globalVariable); // Synlig
  console.log(localVariable); // Synlig
}

// Försök att logga variablerna utanför funktionen
console.log(globalVariable); // Synlig
console.log(localVariable); // Ej synlig (ReferenceError: localVariable is not defined)

//-----------------------------------------------------------------------------------

//***RETURN***

// Exempel 1:
function addNumbers(a, b) {
  return a + b;
}

let sum = addNumbers(3, 4);
console.log(sum); // Resultat: 7

// Exempel 2:
// En arrow-funktion med explicit return
const multiplyNumbers = (a, b) => {
  return a * b;
};

let product = multiplyNumbers(2, 5);
console.log(product); // Resultat: 10
