// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/
//
// coding chalenge 90/366

// function accum(string) {
//   const result = Array(string.length);

//   for (const index in string) {
//     result[index] =
//       string[index].toUpperCase() + Array(Number(index)).fill(string[Number(index)].toLowerCase()).join("");
//   }
//   return result.join("-");
// }

const accum = (string) =>
  string
    .split("")
    .map((value, index) => value.toUpperCase() + Array(index).fill(value.toLowerCase()).join(""))
    .join("-");

console.log(accum("ZpglnRxqenU")); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu
