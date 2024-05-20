// https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9/
//
// coding chalenge 95/366

// function findShort(str) {
//   let result = str;
//   let arrStr = str.split(" ");
//   arrStr.forEach((element) => {
//     if (element.length < result.length) {
//       result = element;
//     }
//   });

//   return result.length;
// }

// function findShort(str) {
//   return Math.min(...str.split(" ").map((item) => item.length));
// }

const findShort = (str) => Math.min(...str.split(" ").map((item) => item.length));

console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
