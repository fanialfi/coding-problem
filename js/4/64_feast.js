// https://www.codewars.com/kata/5aa736a455f906981800360d/
//
// tantangan coding 64/366

// function feast(beast, dish) {
//   const [a, b] = [beast.split("").at(0), beast.split("").at(-1)];
//   const [c, d] = [dish.split("").at(0), dish.split("").at(-1)];

//   if (a == c && b == d) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function feast(beast, dish) {
//   if (
//     beast.split("").at(0) == dish.split("").at(0) &&
//     beast.split("").at(-1) == dish.split("").at(-1)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

const feast = (beast, dish) =>
  beast.split("").at(0) == dish.split("").at(0) &&
  beast.split("").at(-1) == dish.split("").at(-1)
    ? true
    : false;

console.log(feast("great blue heron", "garlic naan"));
