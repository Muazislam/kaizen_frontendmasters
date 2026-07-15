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

const bioData = {
  name: "muaz",
  age: 21,
  favourtieFood: `chocolate`,
  education: `Bachelors`,

  muazIs: function () {
    console.log(`Hi`);
  },
  muaz: () => console.log(`hi`),
};

console.log(bioData.muaz); // wrong way to call function in object ""without putting paranthesis"""
console.log(bioData.muazIs); // wrong way to call function in object ""without putting paranthesis"""
console.log(bioData.muaz()); // correct way to call the funcition inside object
