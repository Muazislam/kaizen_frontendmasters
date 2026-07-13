// Global scopes

// function sayHi() {
//    const result = "Hi"
//    console.log(result)
// }

// const result = "Bye"
// sayHi("Hi")
// console.log(result)

// function myFunction() {
//   const x = 5
// }

// const x = 10
// myFunction()

// inner scope

// const a = 1;

// function func() {
//   const b = 2;
//   console.log(a);
//   console.log(b);
// }

// // outer scope is not possible

// function func() {
//         const b = 2
// }

// func()
// console.log(b)

const name = "Kyle"; //Global scope
function sayHi() {
  console.log(name);
}

sayHi();

//======================================

function myFunction() {
  const x = 3; //New block scope
}

if (true) {
  const x = 1; // New block scope
}

{
  const x = 2; // New block scope
}

//======================================
//Function scope

function myFunction() {
  const x = 5;
}

//=====================================
// Nested Scope

let c = 3; // Global scope

{
  // Outer block scope
  let a = 1;
  {
    // Inner block scope
    let b = 2;

    console.log(a); // can see out scope
    console.log(b); // can see own scope
    console.log(c); // can see global scope
  }

  console.log(a); // can see own scope
  console.log(c); // can see global scope
  console.log(b);
}
