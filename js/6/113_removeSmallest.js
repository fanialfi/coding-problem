// https://www.codewars.com/kata/563cf89eb4747c5fb100001b
//
// coding chalenge 113/366

function removeSmallest(numbers) {
  const minIndex = numbers.indexOf(Math.min(...numbers));
  numbers.splice(minIndex, 1);
  return numbers;
}

console.log(removeSmallest([1, 2, 3, 4, 5])); // [2,3,4,5]
