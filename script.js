// ==== `This` keyword _ && _ classes ====

// console.log(this) // In the browser, this by default sets the refers to the window object

// ==== this With Objects ====
// const person = {
//   name: `Alice`,
//   age: 25,
//   greet() {
//     console.log(`Hello, my name is ${this.name}`);
//   },
// };

// person.greet();
// `this` is used inside the object to refer to the object itself
// This is useful for accessing properties of the
//  object from within its methods.

// ==== Classes  ====

class Person {
  constructor(name, age) {
    // this = {name: 'muaz'}
    this.name = name;
    this.age = age;
    // return this (automatic)
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const muaz = new Person("Muaz", 21);
const basitAli = new Person("Basit Ali", 19);
const abdulMoiz = new Person("Abdul Moiz", 17);

muaz.greet();
basitAli.greet();
abdulMoiz.greet();
