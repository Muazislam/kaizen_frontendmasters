// --------->  Ternary Operator

// ========>    Basic Syntax

/*
const age = 18
age >= 18 ? `trueValue` : `falseValue`
*/

// ? is like an if
// : is as else
// if the condition before ? is true, it
// returns the value after the ?
// otherwise, it returns the value after the :

//======== ============== ==============

//======== ============== ==============

//========>    Ternaries Return Values

let message
if(age >= 18){
    message = `You can vote`
} else {
    message = `You cannot vote`
}

// Ternary operator implementation

const message = age >= 18 ? `You can vote` : `You cannot vote`


// --------> Chaining Ternary Operators

const grad = score >= 90 ? `A` : score >= 80 ? `B` : score >= 70 ? `C` : `F`

// If-else is clearer
let grade
if (score >= 90) {
  grade = "A"
} else if (score >= 80) {
  grade = "B"
} else if (score >= 70) {
  grade = "C"
} else {
  grade = "F"
}