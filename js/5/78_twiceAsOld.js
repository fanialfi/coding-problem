// https://www.codewars.com/kata/5b853229cfde412a470000d0/
//
// coding chalenge 78/366

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   const doubleSonYear = sonYearsOld * 2;

//   if (dadYearsOld == doubleSonYear) {
//     return 0;
//   } else if (dadYearsOld >= doubleSonYear) {
//     return dadYearsOld - doubleSonYear;
//   } else {
//     return doubleSonYear - dadYearsOld;
//   }
// }

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   if (dadYearsOld == sonYearsOld * 2) {
//     return 0;
//   } else if (dadYearsOld >= sonYearsOld * 2) {
//     return dadYearsOld - sonYearsOld * 2;
//   } else {
//     return sonYearsOld * 2 - dadYearsOld;
//   }
// }

// const twiceAsOld = (dadYearOld, sonYearOld) =>
//   sonYearOld * 2 == dadYearOld
//     ? 0
//     : dadYearOld >= sonYearOld * 2
//     ? dadYearOld - sonYearOld * 2
//     : sonYearOld * 2 - dadYearOld;

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - sonYearsOld * 2);

console.log(twiceAsOld(36, 7)); // 22
console.log(twiceAsOld(55, 30)); // 5
