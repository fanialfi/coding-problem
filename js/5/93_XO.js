// https://www.codewars.com/kata/55908aad6620c066bc00002a
//
// coding chalenge 93/366

// function XO(str) {
//   const regexp = [new RegExp(`x`, `gi`), new RegExp(`o`, `gi`)];
//   const xCount = str.match(regexp[0]);
//   const oCount = str.match(regexp[1]);

//   if (xCount != null && oCount != null) {
//     if (xCount.length == oCount.length) {
//       return true;
//     }
//   }
//   return false;
// }

// function XO(str) {
//   const x = str
//     .toLowerCase()
//     .split("")
//     .filter((word) => word == "x");
//   const o = str
//     .toLowerCase()
//     .split("")
//     .filter((word) => word == "o");
//   return x.length == o.length ? true : false;
// }

function XO(str) {
  return str.toLowerCase().split("x").length == str.toLowerCase().split("o").length;
}

console.log(XO("ox")); // true
console.log(XO("xxOo")); // true
console.log(XO("xxxm")); // false
console.log(XO("Oo")); // false
console.log(XO("ooom")); // false
