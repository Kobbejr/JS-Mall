//***CRUD***

//***(1)OBJECT***

// 1.1 CREATE

// Skapa ett objekt
let person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
  hobbies: ["reading", "traveling"],
};

//---------------------------------------

// 1.2 READ

// Läs från objektet
let personName = person.name;

// Läs från ett nestlat objekt
let street = person.address.street;

// Läs från en array inuti objektet
let firstHobby = person.hobbies[0];

//-----------------------------------------

// 1.3 UPDATE

// Uppdatera objektet
person.age = 31;

// Uppdatera ett nestlat objekt
person.address.city = "New City";

// Uppdatera en array inuti objektet
person.hobbies.push("swimming");

//-----------------------------------------

// 1.4 DELETE

// Ta bort från objektet
delete person.age;

// Ta bort från ett nestlat objekt
delete person.address.street;

// Ta bort från en array inuti objektet
person.hobbies.splice(1, 1); // Ta bort ett element från index 1

//-----------------------------------------------

//***(2)ARRAYS***

// 2.1 CREATE

// Skapa en array
let numbers = [1, 2, 3, 4];

// Skapa en array av objekt
let students = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 22 },
];

//------------------------------------------------

//2.2 READ

// Läs från en array
let firstNumber = numbers[0];

// Läs från en array av objekt
let secondStudentName = students[1].name;

//-------------------------------------------------

//2.3 UPDATE

// Uppdatera en array
numbers[1] = 10;

// Uppdatera egenskapen i ett objekt inuti arrayen
students[0].age = 26;

//----------------------------------------------------

//2.4 DELETE

// Ta bort från en array
numbers.splice(2, 1); // Ta bort ett element från index 2

// Ta bort från en array av objekt
students.pop(); // Ta bort det sista objektet från arrayen

//
