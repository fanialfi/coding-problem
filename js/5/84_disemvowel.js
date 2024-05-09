// https://www.codewars.com/kata/52fba66badcd10859f00097e/
//
// coding chalenge 84/366

// function disemvowel(str) {
//   return str
//     .split("")
//     .filter((word) => {
//       if (!"aiueoAIUEO".includes(word)) {
//         return word;
//       }
//     })
//     .join("");
// }

const disemvowel = (str) =>
  str
    .split("")
    .filter((word) => (!"aiueoAIUEO".includes(word) ? word : null))
    .join("");

console.log(disemvowel("This website is for losers LOL!")); // Ths wbst s fr lsrs LL!

// solution for regexp
// function disemvowel(str) {
//   return str.replace(/[aeiou]/gi, '');
// }
