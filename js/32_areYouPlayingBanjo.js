// https://www.codewars.com/kata/53af2b8861023f1d88000832/

// function areYouPlayingBanjo(name) {
//   if(name.toLowerCase()[0] == "r"){
//     return `${name} plays banjo`
//   }else{
//     return `${name} does not play banjo`
//   }
// }

// function areYouPlayingBanjo(name) {
//   return (name.toLowerCase()[0] == "r") ? `${name} plays banjo` : `${name} does not play banjo`
// }

const areYouPlayingBanjo = (name) => name.toLowerCase()[0] == "r" ? `${name} plays banjo` : `${name} does not play banjo`