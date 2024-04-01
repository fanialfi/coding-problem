// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

// function makeNegative(num) {
//   if (num < 0) {
//     return 0
//   } else if (num > 0) {
//     return -num;
//   }
//   return 0
// }

// const makeNegative = (num) => (num > 0) ? -num : num;

const makeNegative = (num) => -Math.abs(num);