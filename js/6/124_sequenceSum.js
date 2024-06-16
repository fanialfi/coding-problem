// https://www.codewars.com/kata/586f6741c66d18c22800010a
//
// coding chalenge 124/366
// https://www.freecodecamp.org/news/javascript-range-create-an-array-of-numbers-with-the-from-method/

// const sequenceSum = (begin, end, step) => {
//   if(begin >= end) {
//     return 0
//   }
//   let result = Array.from({ length: (end - begin) / step + 1 }, (val, idx) => begin + idx * step);
//   return result.reduce((acc, cur) => acc + cur);
// };

const sequenceSum = (begin, end, step) => {
  return begin >= end
    ? 0
    : Array.from({ length: (end - begin) / step + 1 }, (val, idx) => begin + idx * step).reduce(
        (acc, cur) => acc + cur
      );
};

console.log(sequenceSum(2, 6, 2)); // 12
