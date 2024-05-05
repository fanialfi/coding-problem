// https://www.codewars.com/kata/5865918c6b569962950002a1/
//
// coding chalenge 80/366

// function strCount(str, letter) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == letter) {
//       count++;
//     }
//   }
//   return count;
// }
const strCount = (str, letter) => str.split("").filter((element) => element == letter).length;

console.log(strCount("hello", "o")); // 1
console.log(strCount("hello", "l")); // 2
console.log(typeof strCount("hello", "l"));
