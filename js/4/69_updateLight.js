// https://www.codewars.com/kata/58649884a1659ed6cb000072/
//
// tantangan coding 69/366

// function updateLight(current) {
//   if (current == "green") {
//     return "yellow";
//   } else if (current == "yellow") {
//     return "red";
//   } else {
//     return "green";
//   }
// }

// function updateLight(current) {
//   return current == "green" ? "yellow" : current == "yellow" ? "red" : "green";
// }

const updateLight = (current) =>
  current == "green" ? "yellow" : current == "yellow" ? "red" : "green";

console.log(updateLight("green")); // yellow
