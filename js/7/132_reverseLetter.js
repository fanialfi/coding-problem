// https://www.codewars.com/kata/58b8c94b7df3f116eb00005b
//
// coding chalenge 132/266

// function reverseLetter(str) {
//   return str.match(/[a-z]/gi).reverse().join("");
// }

const reverseLetter = (str) => str.match(/[a-z]/gi).reverse().join("");

console.log(reverseLetter("krishan"));
console.log(reverseLetter("ultr53o?n"));
