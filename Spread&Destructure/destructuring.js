//***DESTRUCTURING FÖR ARRAYER***

const numbers = [1, 2, 3, 4, 5];

// Destructuring för att plocka ut värden
const [first, second, ...rest] = numbers;

console.log(first); // Resultat: 1
console.log(second); // Resultat: 2
console.log(rest); // Resultat: [3, 4, 5]

//--------------------------------------------------------

//***DESTRUCTURING FÖR OBJEKT***
const person = { name: "Alice", age: 25, city: "Wonderland" };

// Destructuring för att plocka ut egenskaper
const { name, age } = person;

console.log(name); // Resultat: Alice
console.log(age); // Resultat: 25
