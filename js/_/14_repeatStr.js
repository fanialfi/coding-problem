// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript

// function repeatStr(n, s) {
//   let a = "";
//   for (let i = 0; i < n; i++) {
//     a = a + s;
//   }
//   return a;
// }

// function repeatStr(n, s) {
//   return Array(n).fill(s).join("")
// }

const repeatStr = (n, s) => s.repeat(n)

console.log(repeatStr(3, "*")) // "***"