// https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
//
// coding chalenge 114/366

const number = (array) => array.map((item, index) => `${index + 1}: ${item}`);

console.log(number([])); // []
console.log(number(["a", "b", "c"])); // ["1:a", "2:b", "3:c"]
