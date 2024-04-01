// https://www.codewars.com/kata/57cc975ed542d3148f00015b/
//
// tantangan coding 39/366

// function check(a, x) {
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] == x) {
//       return true;
//     }
//   }
//   return false;
// }

const check = (a, x) => a.includes(x);

console.log(check([66, 101], 66)); // true
console.log(check([101, 45, 75, 105, 99, 107], 107)); // true
console.log(check(["t", "e", "s", "t"], "e")); // true
console.log(check(["what", "a", "great", "kata"], "kat")); // false
