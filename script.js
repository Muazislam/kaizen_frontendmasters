// =========== Equality check ==============

// THe   ==  makes type coercion
// console.log(1 == "1"); // true (converts string "1" to number 1)

// console.log(0 == false);
// console.log(" " == false);
console.log(1 == "2"); //Falso because after type coercion, js checks the values to be the same or not

// Triple Equals === - No Type Coercion
console.log(1 === 1);
console.log(1 === "1");
console.log(0 === "false");
console.log("" === false);
