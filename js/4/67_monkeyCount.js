// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/
//
// tantangan coding 67/366

// function monkeyCount(n) {
//   let result = [];
//   for (let i = 1; i <= n; i++) {
//     result.push(i);
//   }
//   return result;
// }

// function monkeyCount(n) {
//   return Array.from({ length: n }, (elm, idx) => idx + 1);
// }

const monkeyCount = (n) => Array.from({ length: n }, (elm, idx) => idx + 1);

console.log(monkeyCount(5)); // [1,2,3,4,5]
