// https://www.codewars.com/kata/546e2562b03326a88e000020/
//
// coding chalenge 85/366

// function squareDigits(num) {
//   const nums = Array.from(num.toString(), (digit) => Number(digit)); // convert from number to array of number
//   const numSquare = nums.map((num) => num ** 2); // eksponent number by 2
//   return Number(numSquare.join("")); // return count
// }

function squareDigits(num) {
  return Number(
    Array.from(num.toString(), (digit) => Number(digit))
      .map((num) => num ** 2)
      .join("")
  );
}

console.log(squareDigits(3212)); // 9414
