// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/
//
// coding chalenge 87/366

// function descendingOrder(number) {
//   if (number <= 1) {
//     return number;
//   }

//   const numbers = Array.from(number.toString(), (digit) => +digit);
//   return +numbers.sort((a, b) => b - a).join("");
// }

const descendingOrder = (number) =>
  number <= 1
    ? number
    : +Array.from(number.toString(), (digit) => +digit)
        .sort((a, b) => b - a)
        .join("");

console.log(descendingOrder(0)); // 0
console.log(descendingOrder(1)); // 1
console.log(descendingOrder(15)); // 51
console.log(descendingOrder(111)); // 111
