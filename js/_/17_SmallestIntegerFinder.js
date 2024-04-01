// https://www.codewars.com/kata/55a2d7ebe362935a210000b2/train/javascript

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let small = 10000;
//     for (let i = 0; i < args.length; i++) {
//       if (small > args[i]) {
//         small = args[i]
//       }
//     }

//     return small;
//   }
// }

class SmallestIntegerFinder {
  findSmallestInt(args) {
    // return args.sort((a, b) => a - b)[0]
    return Math.min(...args)
  }
}

const sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([1, 2, 3, 4, 5, 6, 7])) // 1
console.log(sif.findSmallestInt([3, 4, 5, 2, 7, 77])) // 2