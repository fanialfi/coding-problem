// https://www.codewars.com/kata/555eded1ad94b00403000071
//
// coding chalenge 112/366

function SeriesSum(n) {
  if (n == 0) "0.00";
  let total = 0;

  for (let index = 1; index <= n; index++) {
    total += 1 / (3 * index - 2);
  }

  return `${total.toFixed(2)}`;
}

console.log(SeriesSum(2)); // 1.25
console.log(SeriesSum(1)); // 1.00
