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

const isLoggedIn = false // (!false = true)
if(!isLoggedIn) { //(!isLoggedIn = IsLoggedIn) ----> True
    console.log("Please log in")  // This runs because !false is true
}


const name = `Kyle`

if(name) {
    console.log(`Hello ${name}!`)
}

const emptyString = ``
if(emptyString) {
    console.log(`This won't run`)
}