// https://www.codewars.com/kata/56269eb78ad2e4ced1000013/
//
// coding chalenge 102/366

// function findNextSquare(sq) {
//   if (Math.floor(Math.sqrt(sq)) ** 2 == sq) {
//     return (Math.sqrt(sq) + 1) ** 2;
//   } else {
//     return -1;
//   }
// }

const findNextSquare = (sq) => (Math.floor(Math.sqrt(sq)) ** 2 == sq ? (Math.sqrt(sq) + 1) ** 2 : -1);

console.log(findNextSquare(121)); // 144
console.log(findNextSquare(625)); // 676
