// https://www.codewars.com/kata/554e4a2f232cdd87d9000038
//
// coding chalenge 96/366

// function dnaStrand(dna) {
//   const result = [];
//   dna.split("").forEach((item) => {
//     if (item == "A") {
//       result.push("T");
//     } else if (item == "T") {
//       result.push("A");
//     } else if (item == "G") {
//       result.push("C");
//     } else if (item == "C") {
//       result.push("G");
//     }
//   });

//   return result.join("");
// }

const dnaPair = {
  A: "T",
  T: "A",
  G: "C",
  C: "G",
};

function dnaStrand(dna) {
  return dna
    .split("")
    .map((item) => dnaPair[item])
    .join("");
}

console.log(dnaStrand("AATT")); // TTAA
