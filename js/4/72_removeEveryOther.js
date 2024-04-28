// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2/
//
// coding chalenge 72/366

// function removeEveryOther(arr) {
//   return arr.filter((elm, idx) => {
//     if (idx % 2 == 0) {
//       return elm;
//     }
//   });
// }

const removeEveryOther = (arr) =>
  arr.filter((elm, idx) => (idx % 2 == 0 ? elm : null));

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"])); // ['Hello', 'Hello Again']
