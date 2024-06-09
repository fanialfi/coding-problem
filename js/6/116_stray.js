// https://www.codewars.com/kata/57f609022f4d534f05000024
//
// coding chalenge 116/366

function stray(numbers) {
  const sorting = numbers.sort((a, b) => a - b);
  return (
    sorting.filter((element) => {
      if (sorting.lastIndexOf(element) - sorting.indexOf(element) == 0) {
        return element;
      }
    })[0] || 0
  );
}

console.log(stray([1, 1, 2]));
