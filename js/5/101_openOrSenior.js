// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/
//
// coding chalenge 101/366

// function openOrSenior(data) {
//   return data.map((item) => {
//     if (item[0] >= 55 && item[1] > 7) {
//       return "Senior";
//     }
//     return "Open";
//   });
// }

const openOrSenior = (data) => data.map((item) => (item[0] >= 55 && item[1] > 7 ? "Senior" : "Open"));

console.log(
  openOrSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
); // ['Open', 'Senior', 'Open', 'Senior']
