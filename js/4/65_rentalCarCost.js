// https://www.codewars.com/kata/568d0dd208ee69389d000016/
//
// tantangan coding 65/366

// function rentalCarCost(d) {
//   let cost = d * 40;
//   if (d >= 7) {
//     cost = cost - 50;
//   } else if (d >= 3) {
//     cost = cost - 20;
//   }

//   return cost;
// }

const rentalCarCost = (d) =>
  d >= 7 ? d * 40 - 50 : d >= 3 ? d * 40 - 20 : d * 40;

console.log(rentalCarCost(1)); // 40
console.log(rentalCarCost(2)); // 80
console.log(rentalCarCost(3)); // 100
