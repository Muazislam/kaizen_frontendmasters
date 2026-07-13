// Closure

// const a = 1

// function print() {
//   console.log(a) // Accessing variable from outer scope
// }

// print() // Prints: 1

// Closures with Dynamic Values

// let a = 1

// function print() {
//         console.log(a)
// }

// a = 2
// print()

// Functions Inside Functions

// function outer(a) {
// //   function inner(b) {
// //     console.log(a);
// //     console.log(b);
// //   }

//   return inner;
// }

// const newFunc = outer(1)

// // const newFunc = inner(b) {
// //         console.log(a);
// //         console.log(b);
// //         }

// newFunc(2) // inner(2)

//=====================================
//=====================================

// Accessing Multiple Scope Levels

// const c = 3; //Global scope

// function outer(a) {
//   function inner(b) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//   }

//   return inner;
// }

// const newFunc = outer(1);
// newFunc(2);

//===================================
//===================================

