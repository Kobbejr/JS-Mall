//***CRUD-OPERATIONER PÅ ARRAYER:***

// 1. Create:
let myArray = []; // Skapa en tom array
myArray.push(1, 2, 3); // Lägg till element i arrayen

// 2. Read:
let firstElement = myArray[0]; // Läs det första elementet i arrayen

// 3. Update:
myArray[1] = 10; // Uppdatera det andra elementet i arrayen

// 4. Delete:
myArray.pop(); // Ta bort det sista elementet från arrayen

//----------------------------------------------------------

//***LOOPA IGENOM ARRAYER MED "for":***/

let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Resultat:
// 1
// 2
// 3
// 4
// 5

//----------------------------------------------------------

//***LOOPA IGENOM ARRAYER MED "forEach":***

numbers.forEach(function (number) {
  console.log(number);
});
// Resultat:
// 1
// 2
// 3
// 4
// 5

//------------------------------------------------------------

//***LOOPA IGENOM ARRAYER MED "map":***

let doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);
// Resultat: [2, 4, 6, 8, 10]

//------------------------------------------------------------

//***FILTRERA ARRAY MED "filter":***

let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});
console.log(evenNumbers);
// Resultat: [2, 4]

//
