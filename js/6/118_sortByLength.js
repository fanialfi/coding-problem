// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
//
// coding chalenge 118/366

// function sortByLength(data) {
//   // Return an array containing the same strings,
//   // ordered from shortest to longest
//   return data.sort((a, b) => a.length - b.length);
// }

const sortByLength = (data) => data.sort((a, b) => a.length - b.length);

console.log(sortByLength(["Beg", "Life", "I", "To"]));
