// ===== Switch Statment =======

// const favoriteAnimal = ``

// switch (favoriteAnimal) { // Switch Expression is the variable to check --favoriteAnimal--
//   case `cat`: // case lable is like the 'if and else-if'
//     console.log('Cats are so cute')
//     break // break lable is to end the switch statment iteration sycle.
//   case `dog`:
//     console.log('dogs are brave and loyal')
//     break
//   case `horse`:
//     console.log(`horse is a true friend. It's been with man for ages`)
//     break
//   default: // default case is like the 'else' statment. it runs if we have nothing or no condition meets
//     console.log('I love all animals')

// }

// // Switch vs if-else

// const favoriteAnimal = "cat"

// if (favoriteAnimal === "cat") {
//   console.log("Cats are pretty cool")
// } else if (favoriteAnimal === "dog") {
//   console.log("They are kinda loud")
// } else if (favoriteAnimal === "shark") {
//   console.log("That is an interesting choice")
// } else {
//   console.log("That is cool but I am unfamiliar with that animal")
// }

// ---------> Advance feature of switch statment

// const weekday = `Saturday`;

// switch (weekday) {
//   case `Monday`:
//   case `Tuesday`:
//   case `Wednesday`:
//   case `Thursday`:
//   case `Friday`:
//     console.log(`This is my work week`);
//     break;
//   case `Saturday`:
//     console.log(`This is the time I should spend with my family`);
//     break;
//   case `Sunday`:
//     console.log(`I should write my journal of the week and write my goals for the week`)
//     break;
//   default:
//     console.log(`I should see which day it is!`)
//   }

// ============================================

// ============================================

//====  Creating Scope with Curly Braces  ====

// const action = `Login`;

// switch (action) {
//   case `Login`: {
//     const a = 1;
//     console.log(a);
//     console.log(`System loged In`);
//     break;
//   }
//   case `Restart`: {
//     const a = 2;
//     console.log(a);
//     console.log(`System Restart`);
//     break;
//   }
//   case `Shut Down`: {
//     const a = 3;
//     console.log(a);
//     console.log(`System shutdown`);
//     break;
//   }
//   default:
//     console.log(`Where is my PC`);
// }

// ============================================

// ============================================

//====  Exercise  ====

// const monthNumber = 9;

// switch (monthNumber) {
//   case 12: {
//     const month = `December`;
//   }
//   case 1: {
//     const month = `January`;
//   }
//   case 2:
//     {
//       const month = `Feburary`;
//     }
//     console.log(`This month brings winter`);
//     break;

//   case 3:
//   case 4:
//   case 5:
//     console.log(`This month brings spring`);
//     break;

//   case 6:
//   case 7:
//   case 8:
//     console.log(`This brings Summer`);
//     break;

//   case 9:
//   case 10:
//   case 11:
//     console.log(`This brings Fall`);
//     break;
// }

// ============================================

// ============================================

//====  Exercise  ====

const getSeason = (month) => {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return `Winter`;

    case 3:
    case 4:
    case 5:
      return `spring`;

    case 6:
    case 7:
    case 8:
      return `Summer`;

    case 9:
    case 10:
    case 11:
      return `Fall`;

    default:
      return `Invalid Month`;
  }
};

console.log(getSeason(2));
console.log(getSeason(13));
