// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/
//
// tantangan coding 43/366

// const reverseSeq = (n) => {
//   let result = [];
//   while (n > 0) {
//     result.push(n--);
//   }
//   return result;
// };

const reverseSeq = (n) => [...new Array(n)].map((elment, index) => n - index);

console.log(reverseSeq(5)); // [5,4,3,2,1]
