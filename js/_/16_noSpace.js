// https://www.codewars.com/kata/57eae20f5500ad98e50002c5/train/javascript

// function noSpace(x) {
//   let result = ""
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] != " ") {
//       result += x[i]
//     }
//   }

//   return result;
// }

// function noSpace(x) {
//   return x.split(" ").join("")
// }

const noSpace = (x) => x.split(" ").join("");

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")) // 8j8mBliB8gimjB8B8jlB