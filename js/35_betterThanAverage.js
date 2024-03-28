// https://www.codewars.com/kata/5601409514fc93442500010b

// function betterThanAverage(classPoints, yourPoints) {
//   const average = classPoints.reduce((acc, cur) => acc + cur,0) / classPoints.length
//   if(average > yourPoints){
//     return false
//   }else{
//     return true
//   }
// }

// function betterThanAverage(classPoints,yourPoints){
//   if (yourPoints > classPoints.reduce((acc, cur) => acc + cur,0) / classPoints.length){
//     return true
//   }else{
//     return false
//   }
// }

const betterThanAverage = (classPoints, yourPoints) => (yourPoints > classPoints.reduce((acc, cur) => acc + cur,0) / classPoints.length) ? true : false