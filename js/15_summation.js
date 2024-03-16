// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript

function summation(num) {
  let result = 0;
  for (a = num; a >= 1; a--) {
    result += a;
  }

  return result;
}

console.log(summation(1)) // 1
console.log(summation(2)) // 3
console.log(summation(8)) // 36