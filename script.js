// ======  While Loops ======

// ===Basic While Loop Syntax===

// let i = 0;
// while (i < 5) {
//   // while loop continues as long as the condition in paranthesis is true. And stops when it becomes false
//   console.log(`count: ${i}`);
//   i++;
// }

// <<<<------------------------------>>>>
// <<<<------------------------------>>>>

// <<<<------Converting For Loop to While Loop------>>>>

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// let i = 0;
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// <<<<------------------------------>>>>
// <<<<------------------------------>>>>

// <<<<------When to use While loop------>>>>

// <<-----------Unknown Number of Iterations--------->>

// let userInput = "";
// while (userInput !== `quit`) {
//   userInput = prompt(`Enter a command (or 'quit' to exit):`);
//   if (userInput !== `quit`) {
//     console.log(`You entered: ${userInput}`);
//   }
// }

// <<-----------Processing Nested Data Structures--------->>

const person = {
  name: `Sheraz`,
  friend: {
    name: `Muaz`,
    friend: {
      name: `Sheraz`,
      friend: null,
    },
  },
};
// person ─────────┐
//                 │
//                 ▼
//               Sheraz

let currentPerson = person; // Many beginner think it creates a copy. It doesn't.
// It says start by looking at the first person.

// person ─────────┐
//                 │
// currentPerson ──┘
//                 ▼
//                Sheraz
// Both variable point at same object
while (currentPerson.friend !== null) {
  currentPerson = currentPerson.friend;
  //   Before

  // currentPerson
  //       │
  //       ▼
  //     Sheraz

  // After

  // currentPerson
  //       │
  //       ▼
  //      Muaz

  // Person never changes. Only currentPerson changes
  console.log(`Current friend: ${currentPerson.name}`);
  // currentPerson
  //     │
  //     ▼
  //  Muaz
}

console.log(`Final friend: ${currentPerson.name}`);

// <<<<------------------------------>>>>
// <<<<------------------------------>>>>

// <<<<------Do While loop------>>>>

let userInput;

do {
  userInput = prompt(`Enter 'yes' to continue:`);
  console.log(`You entered: ${userInput}`);
} while (userInput !== `yes`);
