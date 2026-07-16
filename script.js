// ====  For Loops  ====

// ====  Basic For Loop Syntax  ====

// let i = 0     // Step1
// for (let i = 0; i < 5; i++) {
//   // Step 0
//   console.log(`Count ${i}`); // Step 2
//   // i++  // Step 3
// }

// -----------------------------------
// ===================================
// -----------------------------------

// ==== Simple Counting Example ====

// for (let n = 0; n < 60; n++) {
//   console.log(`Hi`);
// }

// -----------------------------------
// ===================================
// -----------------------------------

// ==== Common Loop Patterns Skip Numbers ====

// for (let i = 0; i <= 10; i += 2) {  // i = i + 2
//                                     // i = 4 + 2 = 6
//   console.log(i);
// }

// // ==== Count down from 10 to 1 ====
// for (let i = 10; i >= 1; i--) {
//   console.log(i)
// }

// -----------------------------------
// ===================================
// -----------------------------------

// ==== Iterating Through Arrays ====

// const fruits = [`apple`, `banana`, `orange`, `tangarange`];

// for (let i = 0; i <= 3; i++) {
//   console.log(`${i}: ${fruits[i]}`);
// }

// -----------------------------------
// ===================================
// -----------------------------------

// ==== Nested For Loops ====

// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     console.log(`${i} x ${j} = ${i * j}`)
//   }
// }

// for (let m = 0; m <= 3; m++) {
//   for (let p = 0; p <= 3; p++) {
//     console.log(`${m} x ${p} = ${m * p}`)
//   }
// }

// -----------------------------------
// ===================================
// -----------------------------------

// ==== Loop Control Statements ====

// -----> break - Exit the Loop Early

const numbers = [1, 3, 7, 2, 9, 4];

for (let i = 0; i < numbers.length; i++) { 
  if (numbers[i] > 5) {
    console.log(`Found: ${numbers[i]} at index ${i}`);
    break;
  }
}
// The number.length purpose is to tell the for loop to 
// make the loop iteration only to the size of the array.
// Working:
//     numbers = [1, 3, 7, 2, 9, 4] -----> has size of 6.
//    But the index number of last digit four is 5.
//    Therefore, we use numbers.length and make the 
//    loop condition less than to the value of length.
//    So, the loop will iterate automatically only to the
//    last index number of the loop.