// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/

// function findAverage(array) {
//   return array.reduce((acc,cur) => {
//     return Math.abs((acc + cur))
//   },0) / array.length
// }

const findAverage = (array) => (array.length <= 0) ? 0 : array.reduce((acc, cur) => acc + cur,0) / array.length

console.log(findAverage([1,1,1])) // 1
console.log(findAverage([1,2,3])) // 2
console.log(findAverage([1,2,3,4])) // 2.5