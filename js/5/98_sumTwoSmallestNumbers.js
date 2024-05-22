// https://www.codewars.com/kata/558fc85d8fd1938afb000014/
//
// coding chalenge 98/366

// function sumTwoSmallestNumbers(numbers) {
//   return numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];
// }

const sumTwoSmallestNumbers = (numbers) => numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1];

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22])); // 13
