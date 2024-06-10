// https://www.codewars.com/kata/542c0f198e077084c0000c2e
//
// coding chalenge 117/366

function getDivisorsCnt(n) {
  const count = new Set();
  const sqrtN = Math.sqrt(n);
  for (let index = 1; index <= sqrtN; index++) {
    if (n % index == 0) {
      count.add(index);
      count.add(n / index);
    }
  }

  return { length: [...count].length, item: [...count] };
}

console.log(getDivisorsCnt(500000));
console.log(getDivisorsCnt(9));
console.log(getDivisorsCnt(50));
