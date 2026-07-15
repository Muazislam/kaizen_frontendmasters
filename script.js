// ======== Advanced Variables Reference vs Value ============

// const c = [1, 2];
// const d = c; // This copies the reference memory address.
//             //  The memory address is not removed and pasted
//             //  from that location.

// d.push(3);
// // Using references, we can modify an array or variable
// // without implementing changes directly on them
// // This is a convenient way to implement changes
// // to a huge array without needing to call each
// // index. but we can make changes
// // with just a seperate 1 variable to the whole game
// console.log(c);

// ========  ============  ===========  ==========

// When we can see reference are all equal

// const a = [1, 2];
// const b = a; // same reference!

// console.log(a === b); // true <-- Both point at same memory locaton

// ========  ============  ===========  ==========

// ==== Objects Working with reference ====

// let person1 = { name: "Kyle" }
// let person2 = person1 // Same reference

// person2.name = "Joe"

// console.log(person1.name) // "Joe" ← Changed!
// console.log(person2.name) // "Joe" ← Same object
// console.log(person1 === person2) // true ← Same reference

// // But creating a new object:
// const person3 = { name: "Joe" }
// console.log(person1 === person3) // false ← Different references