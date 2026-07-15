// ==== If Statements ====

// const age = 18

// if (age >= 18) {
//   console.log("You can vote!") // This will run
// }

// console.log("Program continues...") // This always runs

// -------> Multiple Conditions with Else If

// const temperature = 75

// if (temperature > 80) {
//   console.log("It's hot outside!")
// } else if (temperature > 60) {
//   console.log("Perfect weather!") // This will run
// } else if (temperature > 40) {
//   console.log("It's a bit chilly")
// } else {
//   console.log("It's cold!")
// }

//--------------> AND (&&) - Both conditions must be true
// const age = 25
// const hasLicense = true

// if (age >= 18 && hasLicense) {
//   console.log("You can drive!") // Both conditions are true
// }

// -------> OR (||) - At least one condition must be true

// const isWeekend = 25
// const isHoliday = true

// if (isWeekend || isHoliday) {
//     console.log("No work today")
// }

// ------> NOT (!) - Reverses the condition

// const isLoggedIn = false // (!false = true)
// if(!isLoggedIn) { //(!isLoggedIn = IsLoggedIn) ----> True
//     console.log("Please log in")  // This runs because !false is true
// }

// const name = `Kyle`

// if(name) {
//     console.log(`Hello ${name}!`)
// }

// const emptyString = ``
// if(emptyString) {
//     console.log(`This won't run`)
// }

// -------> Nested If Statements

// const weather = `good`;
// const temperature = 75;

// if (weather === `sunny`) {
//     //=====> Nested if statment layer 1
//     if(temperature > 70) {
//         console.log(`Perfect day for the beach!`)
//     } else {
//         console.log(`Sunny but a bit cold`)
//     }
//     //=====> Nested if statment layer 1 <end>
// } else {
//     console.log(`Not a sunny day`)
// }

// ----------> Guard Clauses

// const checkWeature = (weather, temperature) => {
//   if (weather !== "sunny") {
//     console.log("Not a sunny day");
//     return; //Exit early
//   }

//   if (temperature > 70) {
//     console.log(`Perfect day for the beach!`); // This will run
//   } else {
//     console.log(`Sunny but a bit cold`);
//   }
// };

// checkWeature('cold', 77)

// --------> Exercise
let age = 1
let driverEducation = false

if (age >= 16 && driverEducation) {
  console.log(`You can get the liscense`);
} else if (age < 16) {
  console.log(`You must be at least 16`);
} else if (driverEducation) {
  console.log(`You need to complete driver's education`);
}
