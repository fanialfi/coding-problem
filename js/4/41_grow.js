// https://www.codewars.com/kata/57f780909f7e8e3183000078/
//
// tantangan coding 41/366

// function grow(x) {
//   return x.reduce((acc, cur) => {
//     return acc * cur;
//   });
// }

const grow = (x) => x.reduce((acc, cur) => acc * cur);

console.log(grow([1, 2, 3])); // 6
