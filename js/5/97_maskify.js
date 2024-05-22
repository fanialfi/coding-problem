// https://www.codewars.com/kata/5412509bd436bd33920011bc/
//
// coding chalenge 97/366

// function maskify(cc) {
//   if (cc.length > 4) {
//     const mask = Array(cc.length - 4).fill("#");
//     const finalNumber = cc.slice(-4);
//     mask.push(finalNumber);
//     return mask.join("");
//   } else {
//     return cc;
//   }
// }

// function maskify(cc) {
//   if (cc.length > 4) {
//     return Array(cc.length - 3)
//       .fill("#", 0, -1)
//       .fill(cc.slice(-4), -1)
//       .join("");
//   } else {
//     return cc;
//   }
// }

// function maskify(cc) {
//   return cc.length > 4
//     ? Array(cc.length - 4)
//         .fill("#")
//         .concat(cc.slice(-4))
//         .join("")
//     : cc;
// }

const maskify = (cc) => cc.slice(-4).padStart(cc.length, "#");

console.log(maskify("12345")); // #2345
console.log(maskify("123456")); // ##3456
