// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/
//
// coding chalenge 76/366

function firstNonConsecutive(arr) {
  if (arr.length < 2) return arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i - 1] + 1) {
      return arr[i];
    }
  }
  return null;
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); // 6
console.log(firstNonConsecutive([1, 2, 3, 4])); // null
console.log(firstNonConsecutive([0])); // 0
console.log(firstNonConsecutive([5, 6, 7, 8, 9, 10, 13, 14])); // 13
