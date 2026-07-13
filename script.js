// =================  Type Coercion  =================

// ============== Expllcit Type Coercion ===============

let a = 4;
let b = "2";

let c = a + b; // this gives 42 string.
console.log(c);

let d = a + parseInt(b); // this adds the number
console.log(d);


//============Parce INT vs Parse FLOAT

let decimal = "1.4"

console.log(parseInt(decimal))
console.log(parseFloat(decimal))

//==============Number to string

let number = 3.233

const stringNum = number.toString()

console.log(stringNum)
console.log(typeof stringNum)