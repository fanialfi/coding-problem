// https://www.codewars.com/kata/5648b12ce68d9daa6b000099
//
// coding chalenge 109/366

// const number = function (busStops) {
//   return busStops.reduce((acc, cur) => {
//     return acc + (cur[0] - cur[1]);
//   }, 0);
// };

const number = (busStop) => busStop.reduce((acc, cur) => acc + (cur[0] - cur[1]), 0);

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); // 5
