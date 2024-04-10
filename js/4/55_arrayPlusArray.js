// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/
//
// tantangan coding 55/366

// function arrayPlusArray(arr1, arr2) {
//   const newArray = [...arr1, ...arr2];
//   return newArray.reduce((acc, cur) => acc + cur, 0);
// }

const arrayPlusArray = (arr1, arr2) =>
  [...arr1, ...arr2].reduce((acc, cur) => acc + cur, 0);
