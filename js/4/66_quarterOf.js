// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af/
//
// tantangan coding 66/366

const quarterOf = (month) => {
  if (month >= 10) {
    return 4;
  } else if (month >= 7) {
    return 3;
  } else if (month >= 4) {
    return 2;
  } else if (month <= 3) {
    return 1;
  }
};

// const quarterOf = (month) => Math.ceil(month/3)

console.log(quarterOf(3)); // 1
console.log(quarterOf(5)); // 2
