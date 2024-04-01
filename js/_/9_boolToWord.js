// https://www.codewars.com/kata/53369039d7ab3ac506000467/train/javascript

// function boolToWord(bool) {
//   if (bool) {
//     return "Yes"
//   }
//   return "No"
// }

const boolToWord = (bool) => (bool) ? "Yes" : "No";

console.log(boolToWord(true))
console.log(boolToWord(false))