//***SPREAD FÖR ARRAYER:***

// 1. Kopiera en array:
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Resultat: [1, 2, 3]

// 2. Kombinera två arrayer:
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Resultat: [1, 2, 3, 4, 5, 6]

// 3. Lägga till ett element i en array:
const array3 = [1, 2, 3];
const newArray = [...array3, 4];
console.log(newArray); // Resultat: [1, 2, 3, 4]

//----------------------------------------------------------------

//***SPREAD FÖR OBJEKT:***

// 1. Kopiera ett objekt:
const originalObject = { name: "John", age: 30 };
const copiedObject = { ...originalObject };
console.log(copiedObject); // Resultat: { name: 'John', age: 30 }

// 2. Kombinera två objekt:
const obj1 = { name: "John" };
const obj2 = { age: 30 };
const combinedObject = { ...obj1, ...obj2 };
console.log(combinedObject); // Resultat: { name: 'John', age: 30 }

// 3. Lägga till eller uppdatera egenskaper i ett objekt:
const obj3 = { name: "John" };
const updatedObject = { ...obj3, age: 30 };
console.log(updatedObject); // Resultat: { name: 'John', age: 30 }
