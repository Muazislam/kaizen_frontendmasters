// ==== `This` keyword _ && _ classes ====

// console.log(this) // In the browser, this by default sets the refers to the window object

// ==== this With Objects ====
const person = {
  name: `Alice`,
  age: 25,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};
        
person.greet()
// `this` is used inside the object to refer to the object itself
// This is useful for accessing properties of the
//  object from within its methods.

