// Hoisting

// Function Hoisting in Action

// console.log(sum(1, 2));

// function sum(a, c) {
//   return a + c;
// }

// Arrow functions are not hoisted


// ❌ This doesn't work with arrow functions
console.log(sumArrow(1, 2));

const sumArrow = (a, b) => {
  return a + b;
};


// Main program logic (easy to read)
processUserData()
displayResults()
cleanup()

// Helper functions (implementation details)
function processUserData() {
  console.log("Processing...")
}

function displayResults() {
  console.log("Displaying results...")
}

function cleanup() {
  console.log("Cleaning up...")
}