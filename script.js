// Problem with var

// Var is function scope
// which means that the function can access
// the code from outside the curly braces in which it was declared
// The inner code is accessible.
// This is not possible because aaccessing data happens for
// outside variales.

const functionVar = () => {
  {
    var a = 1;
  }
  console.log(a);
};

let b = 2;
functionVar();
const functionLet = () => {
  console.log(b);
};
functionLet();
