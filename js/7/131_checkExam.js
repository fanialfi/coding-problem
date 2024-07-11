// https://www.codewars.com/kata/5a3dd29055519e23ec000074
//
// coding chalenge 131

// function checkExam(array1, array2) {
//   let result = 0;
//   for (let i = 0; i < array2.length; i++) {
//     if (array2[i].length != 0 && array1[i] == array2[i]) {
//       result += 4;
//     } else if (array2[i].length != 0 && array1[i] != array2[i]) {
//       result -= 1;
//     }
//   }

//   if (result <= 0) {
//     return 0;
//   } else {
//     return result;
//   }
// }

function checkExam(answerKey, answerStudent) {
  const count = answerStudent
    .map((element, index) => {
      if (answerKey[index] == element) {
        return 4;
      } else if (element.length == 0) {
        return 0;
      } else {
        return -1;
      }
    })
    .reduce((acc, cur) => acc + cur);

  return count < 0 ? 0 : count;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
