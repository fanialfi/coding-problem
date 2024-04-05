// https://www.codewars.com/kata/5556282156230d0e5e000089/
//
// tantangan coding 49/366

// function DNAtoRNA(dna) {
//   let result = "";
//   for (let i = 0; i < dna.length; i++) {
//     if (dna[i] == "T") {
//       result += "U";
//     } else {
//       result += dna[i];
//     }
//   }
//   return result;
// }

// function DNAtoRNA(dna) {
//   return dna.replaceAll("T", "U");
// }

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");

console.log(DNAtoRNA("GCAT"));
