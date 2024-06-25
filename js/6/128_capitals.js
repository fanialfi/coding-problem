// https://www.codewars.com/kata/539ee3b6757843632d00026b
//
// coding chalenge 128/366

// function capitals(word) {
//   const indexMatch = [];
//   const capitals = word.match(/[A-Z]/g);

//   capitals.forEach((capital) => {
//     const index = word.indexOf(capital);
//     indexMatch.push(index);
//   });

//   return indexMatch;
// }

// function capitals(word) {
//   const indexMatch = [];

//   word.match(/[A-Z]/g).forEach((capital) => {
//     const index = word.indexOf(capital);
//     indexMatch.push(index);
//   });

//   return indexMatch;
// }

// function capitals(word) {
//   return word.match(/[A-Z]/g).map((capital) => {
//     return word.indexOf(capital);
//   });
// }

const capitals = (word) => word.match(/[A-Z]/g).map((capital) => word.indexOf(capital));

console.log(capitals("CodEWaRs"));
