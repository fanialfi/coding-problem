// https://www.codewars.com/kata/5513795bd3fafb56c200049e/
//
// tantangan coding 47/366

// function countBy(x, n) {
//   return [...Array(n)].map((item, index) => x * (index + 1));
// }

const countBy = (x, n) => [...Array(n)].map((item, index) => x * (index + 1));

console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
console.log(countBy(2, 5)); //  [2,4,6,8,10]
