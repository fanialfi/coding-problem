// https://www.codewars.com/kata/563e320cee5dddcf77000158/
//
// tantangan coding 60/366

// function getAverage(marks) {
//   return Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);
// }

const getAverage = (marks) =>
  Math.floor(marks.reduce((acc, cur) => acc + cur) / marks.length);

console.log(getAverage([2, 2, 2, 2])); // 2
console.log(getAverage([1, 2, 3, 4, 5])); // 3
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1
