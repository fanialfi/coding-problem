// https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript

// function squareSum(numbers) {
//   let result = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     result = result + (numbers[i] ** 2)
//   }

//   return result;
// }


// function squareSum(numbers) {
//   let result = 0;
//   numbers.forEach(element => {
//     result = result + (element ** 2)
//   });
//   return result;
// }

const squareSum = (numbers) => numbers.reduce((acc, cur) => acc + (cur ** 2), 0)

console.log(squareSum([1, 2])) // 5
console.log(squareSum([])) // 0