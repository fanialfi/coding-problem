// https://www.codewars.com/kata/53dc54212259ed3d4f00071c/

// function sum (numbers) {
//   "use strict";
//   if(numbers.length <= 0){
//     return 0
//   }

//   let result = 0;
//   numbers.forEach(number => {
//     result += number
//   });

//   return result
// };

// function sum(numbers){
//   "use strict";
//   if(numbers.length <= 0){
//     return 0
//   }
//   return numbers.reduce((acc,cur) => {
//     return acc + cur;
//   },0)
// }

// function sum(numbes) {
//   return (numbes.length <= 0) ? 0 : numbes.reduce((acc,cur) => acc + cur,0)
// }

const sum = (numbers) => (numbers.length <= 0) ? 0 : numbers.reduce((acc,cur) => acc + cur,0)

// sebenarnya tidak perlu pengkondisian (numbers.length <= 0)
// karena pada method reduce, nilai default / nila pertama sudah di set 0