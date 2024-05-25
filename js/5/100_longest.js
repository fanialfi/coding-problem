// https://www.codewars.com/kata/5656b6906de340bd1b0000ac/
//
// coding chalenge 100/366

// function longest(s1, s2) {
//   const baru = [...s1.split(""), ...s2.split("")].sort();
//   return [...new Set(baru)].join("");
// }

const longest = (s1, s2) => [...new Set([...s1.split(""), ...s2.split("")].sort())].join("");

console.log(longest("abc", "abcd"));
