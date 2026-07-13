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
