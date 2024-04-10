// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/
//
// tantangan coding 54/366

// function stringToArray(str) {
//   let result = [];
//   let res = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] != " ") {
//       res += str[i];
//     } else {
//       result.push(res);
//       res = "";
//     }
//   }

//   if (res !== "") {
//     result.push(res);
//   }
//   return result;
// }

// function stringToArray(str) {
//   return str.split(" ");
// }

const stringToArray = (str) => str.split(" ");

console.log(stringToArray("Hello Fanialfi"));
