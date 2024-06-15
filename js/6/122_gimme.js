// https://www.codewars.com/kata/545a4c5a61aa4c6916000755
//
// coding chalenge 122/366

// not working on nodejs v18.x
// function gimme(triplet) {
//   const middle = triplet.toSorted((a, b) => a - b)[1];
//   return triplet.indexOf(middle);
// }

const gimme = (triplet) => triplet.indexOf([...new Set(triplet)].sort((a, b) => a - b)[1]);

console.log(gimme([2, 3, 1])); // 0
console.log(gimme([5, 10, 14])); // 1
