// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3/

// function abbrevName(name) {
//   return name.split(" ").map((initial) => {
//     return initial[0]
//   }).join(".").toUpperCase()
// }

const abbrevName = (name) => name.split(" ").map((initial) => initial[0]).join(".").toUpperCase();

console.log(abbrevName("fani alfirdaus")) // f.a