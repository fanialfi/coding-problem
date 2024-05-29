// https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/
//
// coding chalenge 104/366

// function validatePIN(pin) {
//   if (pin.length == 4 || pin.length == 6) {
//     const pp = pin.match(/^\d+$/g);
//     if (pp) {
//       return true;
//     } else {
//       return false;
//     }
//   }

//   return false;
// }

// function validatePIN(pin) {
//   if (pin.length == 4 || pin.length == 6) {
//     if (pin.match(/^\d+$/)) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

const validatePIN = (pin) => (pin.length == 4 || pin.length == 6 ? (pin.match(/^\d+$/) ? true : false) : false);

console.log(validatePIN("12345")); // false
console.log(validatePIN("123400")); // true
console.log(validatePIN("-1234")); // false
