// ===== NaN (Not a Number) ======

// When a person tries to convert a letter into number
const result = parseInt("Hello");

console.log(result);
console.log(typeof result);

// Nan is not false. In Javascript, it is not considered to be false

console.log(result == NaN); // nan is never equal to anything

const a = parseInt("Hello")
const b = 3

// The correct way to check  
console.log(isNaN (a))
console.log(isNan(b))