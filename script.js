        // functions as variables 

// function printName(name) {
//     console.log(name)
// }

// console.log(printName)


        // passing function to other variables 

// function printName(name) {
//     console.log(name)
// }

// function callFunction(x) {
    
//     x("Kyle")
    
// }

// callFunction(printName)

        // callback function

// function sumCallback(a,b, callback) {
//     let sum = a + b
//     callback(sum)
// }

// function handleSum(sum) {
//     console.log(sum)
// }

// sumCallback(1,2, handleSum)


function printName (firstName, LastName, callback) {
    const fullName = firstName + " " + LastName
    console.log(callback(fullName))
}

function prependName (name) {
    return "hello " + name
}

printName("Muaz", "Babar", prependName)