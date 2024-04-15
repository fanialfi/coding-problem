// https://www.codewars.com/kata/576b93db1129fcf2200001e6/
//
// tantangan coding 58/366

// function sumArray(array) {
//   if (!Array.isArray(array) || array.length <= 2) {
//     return 0;
//   }

//   return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, cur) => acc + cur);
// }

const sumArray = (arr) =>
  !Array.isArray(arr) || arr.length <= 2
    ? 0
    : arr
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((acc, cur) => acc + cur);

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([1]));
console.log(sumArray([1, 2]));
console.log(sumArray([6, 2, 1, 8, 10]));
console.log(sumArray([-6, -20, -1, -10, -12]));
