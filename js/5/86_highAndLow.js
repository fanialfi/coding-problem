// https://www.codewars.com/kata/554b4ac871d6813a03000035/
//
// coding chalenge 86/366

// function highAndLow(numbers) {
//   const arrayNumbers = numbers.split(" ").map((number) => +number);
//   const highLow = [Math.max(...arrayNumbers), Math.min(...arrayNumbers)];
//   return highLow.join(" ");
// }

function highAndLow(numbers) {
  return [
    Math.max(...numbers.split(" ").map((number) => +number)),
    Math.min(...numbers.split(" ").map((number) => +number)),
  ].join(" ");
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42 -9"
