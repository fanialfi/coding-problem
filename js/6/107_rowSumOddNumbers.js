// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064
//
// coding chalenge 107/366
// https://chatgpt.com/c/68ce405c-5014-49a2-a67d-ef234f072b76

// function rowSumOddNumbers(n) {
//   const arry = Array.from({ length: n }, (_, length) => length + 1);
//   const odd = arry.filter((arr) => {
//     return arr % 2 == 1;
//   });
//   const count = odd.reduce((acc, cur) => acc + cur, 0);
//   return count;
// }

const rowSumOddNumbers = (n) => Math.pow(n, 3);

console.log(rowSumOddNumbers(42));
