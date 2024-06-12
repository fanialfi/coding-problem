// https://www.codewars.com/kata/563f037412e5ada593000114
//
// coding chalenge 119/366

function calculateYears(principal, interest, tax, desired) {
  if (principal >= desired) {
    return 1;
  }

  let money = principal;
  for (let index = 1; money <= desired; index++) {
    const newInterest = money * interest;
    const newTax = newInterest * tax;
    money += newInterest - newTax;

    if (money >= desired) {
      return { count: money, year: index };
    }
  }
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
console.log(calculateYears(1000, 0.01625, 0.18, 1200));
console.log(calculateYears(1000, 0.05, 0.18, 1000));
