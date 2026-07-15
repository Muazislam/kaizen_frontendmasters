// seperate variables
// const name = "Kyle";
// const age = 30;
// const favoriteNumber = 3;

//========== Accessing Object Properties ============

// const person = {
//   name: "Muaz", // key: name, value: "Muaz"
//   age: 30, // key: age, value: 30
//   favoriteNumber: 3, // key: favoriteNumber, Value: 3
// };

// console.log(person.age);
// console.log(person.favoriteNumber)
// console.log(person.name)

// ===== Adding Functions to Objects =====

// const bioData = {
//   name: "muaz",
//   age: 21,
//   favourtieFood: `chocolate`,
//   education: `Bachelors`,

//   muazIs: function () {
//     console.log(`Hi`);
//   },
//   muaz: () => console.log(`hi`),
// };

// console.log(bioData.muaz); // wrong way to call function in object ""without putting paranthesis"""
// console.log(bioData.muazIs); // wrong way to call function in object ""without putting paranthesis"""
// console.log(bioData.muaz()); // correct way to call the funcition inside object

// ==== Shorthand Function Syntax ====

// const bioData = {
//   name: "muaz",
//   age: 21,
//   favourtieFood: `chocolate`,
//   education: `Bachelors`,

//   muazIs() {
//     console.log(`Hi`);
//   },
//   muaz() {
//     console.log(`hi`);
//   },
// };

// console.log(bioData.muaz); // wrong way to call function in object ""without putting paranthesis"""
// console.log(bioData.muazIs); // wrong way to call function in object ""without putting paranthesis"""
// console.log(bioData.muaz()); // correct way to call the funcition inside object

// // ==== Real-World Example: console.log ====

// console.log("Hello"); //console is an object, log is the message

// const console = {
//   log(message) {
//     // Display the message
//   },
// };

//=============================================

// =========== Nested Objects =======

const bioData = {
  name: "muaz",
  age: 21,
  favourtieFood: `chocolate`,
  education: `Bachelors`,

  muazIs() {
    console.log(`Hi`);
  },
  muaz() {
    console.log(`hi`);
  },

  address: {
    street: `12345 Main Street`,
    city: `Karachi`
  },
  hobbies: ["football", `copying github file`, `doing search for new tools`, `programming`]
};

console.log(bioData.address.city)
console.log(bioData.address.street) // Accessing a sub property from an object property, inside the object.
console.log(bioData.hobbies[0]) // Accessing array from the object property
