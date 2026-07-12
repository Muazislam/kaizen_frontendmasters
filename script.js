// functions as variables

// function printName(name) {
//     console.log(name)
// }

// console.log(printName)

// passing function to other variables

// function printName(name) {
//     console.log(name)
// }

// function callFunction(x) {

//     x("Kyle")

// }

// callFunction(printName)

// callback function

// function sumCallback(a,b, callback) {
//     let sum = a + b
//     callback(sum)
// }

// function handleSum(sum) {
//     console.log(sum)
// }

// sumCallback(1,2, handleSum)

// function printName (firstName, LastName, callback) {
//     const fullName = firstName + " " + LastName
//     console.log(callback(fullName))
// }

// function prependName (name) {
//     return "hello " + name
// }

// printName("Muaz", "Babar", prependName)

// Arrow function

// convert a normal function to an arrow function

// function sum(a,b) {
//         return a + b
// }

// const sumArrow = (a,b) => {
//         return a + b
// }

// console.log(sum(1,2))
// console.log(sumArrow(1,2))

// single parameter shortcut

// const printName = (name) => {
//         console.log(name)

// }

// const printNameShort = name => {
//         console.log(name)
// }

// multiple parameters

// const sayHi = () => {
//   console.log("Hi");
// };

// const add = (x, y) => {
//   return x + y;
// };


const sum = (a,b) => {
        return a + b
}

const sumShort = (a,b) => a +b

console.log (sumShort(1,2))