// https://www.codewars.com/kata/5875b200d520904a04000003/
//
// coding chalenge 73/366

// function enough(cap, on, wait) {
//   if (cap - on >= wait) {
//     return 0;
//   } else {
//     return on + wait - cap;
//   }
// }

const enough = (cap, on, wait) => (cap - on >= wait ? 0 : on + wait - cap);

console.log(enough(10, 5, 5)); // 0
console.log(enough(100, 60, 50)); // 10
console.log(enough(20, 5, 5)); // 0
