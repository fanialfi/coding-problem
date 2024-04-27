// https://www.codewars.com/kata/568dcc3c7f12767a62000038/
//
// coding challenge 70/366

// function setAlarm(employed, vacation) {
//   if (employed != vacation) {
//     return employed;
//   } else if (employed == vacation) {
//     return false;
//   }
// }

const setAlarm = (employed, vacation) =>
  employed != vacation ? employed : false;

console.log(setAlarm(true, true)); // false
console.log(setAlarm(false, true)); // false
console.log(setAlarm(true, false)); // true
