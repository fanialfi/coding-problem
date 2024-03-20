// https://www.codewars.com/kata/5583090cbe83f4fd8c000051

// function digitize(n) {
//   return n.toString().split("").reverse().map((item) => +item)
// }

const digitize = (n) => n.toString().split("").reverse().map((item) => +item)

console.log(digitize(35231)) // [1,3,2,5,3]