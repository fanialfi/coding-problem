// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/
//
// tantangan coding 50/366

// function countSheep(num) {
//   let result = "";
//   for (let i = 0; i < num; i++) {
//     result += `${i + 1} sheep...`;
//   }
//   return result;
// }

// function countSheep(num) {
//   return Array.from({ length: num }, (index, value) => value)
//     .map((item) => `${item + 1} sheep...`)
//     .join("");
// }

const countSheep = (num) =>
  Array.from({ length: num }, (index, value) => value)
    .map((item) => `${item + 1} sheep...`)
    .join("");

console.log(countSheep(3));
