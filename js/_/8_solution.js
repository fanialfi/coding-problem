// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str) {
//   let hasil = "";
//   for (let index = str.length - 1; index >= 0; index--) {
//     hasil = hasil + str[index]
//   }

//   return hasil
// }

const solution = (str) => str.split("").reverse().join("");

console.log(solution("world")) // dlrow