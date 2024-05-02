// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/
//
// coding chalenge 77/366

// function checkForFactor(base, factor) {
//   if (base % factor == 0) {
//     return true;
//   }
//   return false;
// }

const checkForFactor = (base, factor) => (base % factor == 0 ? true : false);

console.log(checkForFactor(10, 2)); // true
console.log(checkForFactor(63, 7)); // true
console.log(checkForFactor(2450, 5)); // true
console.log(checkForFactor(9, 2)); // false
