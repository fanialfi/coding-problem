// https://www.codewars.com/kata/511f11d355fe575d2c000001
//
// coding chalenge 130/366

// function twoOldestAges(ages) {
//   return ages.sort((a, b) => a - b).slice(-2);
// }

const twoOldestAges = (ages) => ages.sort((a, b) => a - b).slice(-2);

console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
