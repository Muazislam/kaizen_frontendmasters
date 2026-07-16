// ===== Switch Statment =======

const favoriteAnimal = ``

switch (favoriteAnimal) { // Switch Expression is the variable to check --favoriteAnimal--
  case `cat`: // case lable is like the 'if and else-if'
    console.log('Cats are so cute')
    break // break lable is to end the switch statment iteration sycle.
  case `dog`:
    console.log('dogs are brave and loyal')
    break
  case `horse`:
    console.log(`horse is a true friend. It's been with man for ages`)
    break
  default: // default case is like the 'else' statment. it runs if we have nothing or no condition meets
    console.log('I love all animals')

}


// Switch vs if-else

const favoriteAnimal = "cat"

if (favoriteAnimal === "cat") {
  console.log("Cats are pretty cool")
} else if (favoriteAnimal === "dog") {
  console.log("They are kinda loud")
} else if (favoriteAnimal === "shark") {
  console.log("That is an interesting choice")
} else {
  console.log("That is cool but I am unfamiliar with that animal")
}