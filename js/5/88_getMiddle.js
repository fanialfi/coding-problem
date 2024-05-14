// https://www.codewars.com/kata/56747fd5cb988479af000028/
//
// coding chalenge 88/366

// function getMiddle(s) {
//   if (s.length % 2 == 0) {
//     return [s[s.length / 2 - 1], s[s.length / 2]].join("");
//   } else {
//     return s[Math.round(s.length / 2 - 1)];
//   }
// }

const getMiddle = (string) =>
  string.length % 2 == 0
    ? [string[string.length / 2 - 1], string[string.length / 2]].join("")
    : string[Math.round(string.length / 2 - 1)];

console.log(getMiddle("test")); // es
console.log(getMiddle("testing")); // t
console.log(getMiddle("middle")); // dd
