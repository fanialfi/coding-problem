// https://www.codewars.com/kata/57cc981a58da9e302a000214
//
// coding chalenge 129/366

// function smallEnough(a, limit) {
//   loop: for (let index = 0; index < a.length; index++) {
//     if (a[index] <= limit) {
//       continue loop;
//     } else {
//       return false;
//     }
//   }

//   return true;
// }

// function smallEnough(a, limit) {
//   const result = a.map((item) => item <= limit);
//   return result.includes(false) ? false : true;
// }

const smallEnough = (a, limit) => (a.map((item) => item <= limit).includes(false) ? false : true);

console.log(smallEnough([66, 101], 200)); // true
