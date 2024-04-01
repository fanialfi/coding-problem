// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/

// function invert(array) {
//   return array.map((item) => {
//    if (item != 0){
//     return -item;
//    }else{
//     return item;
//    }
//   })
// }

const invert = (array) => array.map((item) => (item != 0) ? -item : item);

console.log(invert([1,2,3,4,5])) // [-1,-2,-3,-4,-5]
console.log(invert([1,-2,3,-4,5])) // [-1,2,-3,4,-5]
console.log(invert([])) // []
console.log(invert([0])) // [0]