// https://www.codewars.com/kata/56541980fa08ab47a0000040/
//
// coding chalenge 103/366

function printerError(s) {
  const error = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let errorCount = 0;
  error.forEach((element) => {
    errorCount = errorCount + s.split(element).length - 1;
  });
  return `${errorCount}/${s.length}`;
}

let test = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxxyz";
console.log(printerError(test)); // 4/57
