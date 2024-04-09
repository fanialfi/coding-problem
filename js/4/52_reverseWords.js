// https://www.codewars.com/kata/51c8991dee245d7ddf00000e/
//
// tantangan coding 52/366

// function reverseWords(str) {
//   let result = [];
//   str.split(" ").forEach((item) => {
//     result.unshift(item);
//   });

//   return result.join(" ");
// }

// function reverseWords(str) {
//   return str.split(" ").reverse().join(" ");
// }

const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords("Hello world"));
