// https://www.codewars.com/kata/57eae65a4321032ce000002d/
// 
// tantangan coding 38/366

// function fakeBin(x){
//   return x.split("").map((item) => {
//     if(+item >= 5){
//       return 1;
//     }else{
//       return 0
//     }
//   }).join("")
// }

// function fakeBin(x){
//   return x.split("").map((item) => (+item >= 5) ? 1:0).join("")
// }

const fakeBin = (x) => x.split("").map((item) => (+item >= 5) ? 1:0).join("")

console.log(fakeBin("45385593107843568")) // "01011110001100111"