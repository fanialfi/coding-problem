// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript

// function basicOp(operation, value1, value2) {
//   if (value1 > value2) {
//     if (operation == "+") {
//       return value1 + value2
//     } else if (operation == "-") {
//       return value1 - value2
//     } else if (operation == "/") {
//       return value1 / value2
//     } else {
//       return value1 * value2
//     }
//   } else {
//     if (operation == "+") {
//       return value1 + value2
//     } else if (operation == "-") {
//       return value1 - value2
//     } else if (operation == "/") {
//       return value1 / value2
//     } else {
//       return value1 * value2
//     }
//   }
// }


// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "/":
//       return value1 / value2;
//     default:
//       return value1 * value2;
//   }
// }

const basicOp = (operation, value1, value2) => eval(value1, operation, value2)