// https://www.codewars.com/kata/54edbc7200b811e956000556/train/javascript

// function countSheeps(sheep) {
//   let result = 0;
//   for (let i = 0; i < sheep.length; i++) {
//     // if (sheep[i]) {
//     //   result++
//     // }
//     if (Boolean(sheep[i])) {
//       result++
//     }
//   }
//   return result;
// }

const countSheeps = (sheep) => sheep.filter(Boolean).length;

console.log(countSheeps([])) // 0
console.log(countSheeps([undefined])) // 0
console.log(countSheeps([null])) // 0
console.log(countSheeps([undefined, null, false, true])) // 1