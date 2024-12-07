/**
 * @param {number} n
 * @return {string[]}
 */

function fizzBuzz(n) {
  const fizzBuzz = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      fizzBuzz[i - 1] = "FizzBuzz";
    } else if (i % 3 == 0) {
      fizzBuzz[i - 1] = "Fizz";
    } else if (i % 5 == 0) {
      fizzBuzz[i - 1] = "Buzz";
    } else {
      fizzBuzz[i - 1] = `${i}`;
    }
  }

  return fizzBuzz;
}
