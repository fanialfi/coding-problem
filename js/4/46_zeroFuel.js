// https://www.codewars.com/kata/5861d28f124b35723e00005e/
//
// tantangan coding 46/366

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   if (mpg * fuelLeft >= distanceToPump) {
//     return true;
//   }
//   return false;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  mpg * fuelLeft >= distanceToPump ? true : false;
