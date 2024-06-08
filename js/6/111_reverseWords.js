// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4
//
// coding chalenge 111/366

// function reverseWords(str) {
//   if (str.includes(" ")) {
//     return str
//       .split(" ")
//       .map((item) => item.split("").reverse().join(""))
//       .join(" ");
//   } else {
//     return str.split("").reverse().join("");
//   }
// }

const reverseWords = (str) => str.split("").reverse().join("").split(" ").reverse().join(" ");

console.log(reverseWords("apple")); // elppa
console.log(reverseWords("fani alfi")); // inaf ifla
