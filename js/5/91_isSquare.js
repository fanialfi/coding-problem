// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/
//
// coding chalenge 91/366

// function isSquare(num) {
//   if (Number.isInteger(Math.sqrt(num))) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isSquare = (num) => (Number.isInteger(Math.sqrt(num)) ? true : false);

console.log(isSquare(25)); // true;
console.log(isSquare(26)); // false
