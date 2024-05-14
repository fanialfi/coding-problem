// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/
//
// coding chalenge 89/366

// function filter_list(list) {
//   return list.filter((item) => typeof item == "number");
// }

const filter_list = (list) => list.filter((item) => typeof item == "number");

console.log(filter_list([1, 2, "a", "b"])); // [1,2]
console.log(filter_list([1, "a", "b", 0, 15])); // [1,0,15]
