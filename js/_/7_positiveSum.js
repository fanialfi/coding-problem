// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript

// function positiveSum(arrs) {
//   let positif = [];
//   if (arrs.length == 0) {
//     return 0;
//   } else {
//     positif = arrs.filter((arr) => arr > 0);
//   }

//   if (positif.length == 0) {
//     return 0
//   } else {
//     positif = positif.reduce((acc, cur) => acc + cur);
//   }
//   return positif;
// }

const positiveSum = (arrs) => {
  let positif = (arrs.length == 0) ? 0 : arrs.filter((arr) => arr > 0)
  return (Array.isArray(positif) && positif.length > 0) ? positif.reduce((acc, cur) => acc + cur) : 0;
}

console.log(positiveSum([1, 2, 3, 4, 5])) // 15
console.log(positiveSum([1, -2, 3, 4, 5])) // 13
console.log(positiveSum([])) // 0
console.log(positiveSum([-1, -2, -3, -4, -5])) // 0
console.log(positiveSum([-1, 2, 3, 4, -5])) // 9