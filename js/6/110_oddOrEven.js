// https://www.codewars.com/kata/5949481f86420f59480000e7
//
// coding chalenge 110/366

// function oddOrEven(array) {
//   return array.reduce((acc, cur) => acc + cur, 0) % 2 == 0 ? "even" : "odd";
// }

const oddOrEven = (array) => (array.reduce((acc, cur) => acc + cur, 0) % 2 == 0 ? "even" : "odd");

console.log(oddOrEven([0])); // even
