// https://www.codewars.com/kata/56b1f01c247c01db92000076/
//
// tantangan coding 68/366

// function doubleChar(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     result.push(str[i], str[i]);
//     // result.push(str[i]);
//   }

//   return result.join("");
// }

// function doubleChar(str) {
//   return str
//     .split("")
//     .map((item) => item + item)
//     .join("");
// }

const doubleChar = (str) =>
  str
    .split("")
    .map((item) => item + item)
    .join("");

console.log(doubleChar("Hello World!")); // HHeelllloo  WWoorrlllldd!!
