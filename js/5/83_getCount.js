// https://www.codewars.com/kata/54ff3102c1bad923760001f3/
//
// coding chalenge 83/366

// function getCount(str) {
//   let result = [];
//   for (const obj of str) {
//     if (obj === "a" || obj === "i" || obj === "u" || obj === "e" || obj === "o") {
//       result.push(obj);
//     }
//   }

//   return result.length;
// }

function getCount(str) {
  // const vocals = ["a", "i", "u", "e", "o", "A", "I", "U", "E", "O"];

  return str.split("").filter((value) => {
    // for (const vocal of vocals) {
    //   if (value == vocal) {
    //     return value;
    //   }
    // }

    if ("aiueoAIUEO".includes(value)) {
      return value;
    }
  }).length;
}

console.log(getCount("abracadabra")); // 5
