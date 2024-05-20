// https://www.codewars.com/kata/5390bac347d09b7da40006f6
//
// coding chalenge 94/366

// String.prototype.toJadenCase = function () {
//   return this.split(" ")
//     .map((item) => {
//       return item.replace(/^[A-Za-z]/gi, (match) => match.toUpperCase());
//     })
//     .join(" ");
// };

String.prototype.toJadenCase = function () {
  return this.split(" ")
    .map((item) => item.replace(/^[a-z]/gi, (match) => match.toUpperCase()))
    .join(" ");
};

console.log("fani alfi".toJadenCase());
