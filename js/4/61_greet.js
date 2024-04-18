// https://www.codewars.com/kata/5772da22b89313a4d50012f7/
//
// tantangan coding 61/366

// function greet(name, owner) {
//   if (name === owner) {
//     return "Hello boss";
//   }
//   return "Hello guest";
// }

const greet = (name, owner) => (name == owner ? "Hello boss" : "Hello guest");
