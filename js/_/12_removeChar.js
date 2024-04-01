// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript

// function removeChar(str) {
//   const first = 0;
//   const last = str.length - 1;
//   let result = "";
//   for (let index = 0; index < str.length; index++) {
//     (index != first) ? (index != last) ? result = result + str[index] : null : null;
//   }

//   return result;
// };

const removeChar = (str) => str.split("").slice(1, str.length - 1).join("");

console.log(removeChar("eloquent"));