//***CRUD-operationer på objekt:***

// 1. Create:
let person = {}; // Skapa ett tomt objekt
person.name = "John"; // Lägg till en egenskap i objektet

// 2. Read:
let personName = person.name; // Läs egenskapen från objektet med punkt-notation
let personAge = person["age"]; // Läs egenskapen från objektet med bracket-notation

// 3. Update:
person.name = "Jane"; // Uppdatera egenskapen i objektet med punkt-notation
person["age"] = 25; // Uppdatera egenskapen i objektet med bracket-notation

// 4. Delete:
delete person.name; // Ta bort egenskapen från objektet

//-------------------------------------------------------------

//***Läsa properties från objekt:***

// 1. Punkt-notation:
let person = { name: "John", age: 30 };
console.log(person.name); // Resultat: John

// 2. Bracket-notation:
let propertyName = "name";
console.log(person[propertyName]); // Resultat: John

//-------------------------------------------------------------

//***Använda variabler för att läsa properties i objekt:***

let person = { name: "John", age: 30 };
let propertyToRead = "age";
console.log(person[propertyToRead]); // Resultat: 30

//-----------------------------------------------------------

//***Loopa igenom objekt med for...in loop:***

let person = { name: "John", age: 30, city: "New York" };

for (let key in person) {
  console.log(key + ": " + person[key]);
}
// Resultat:
// name: John
// age: 30
// city: New York
