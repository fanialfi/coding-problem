// https://www.codewars.com/kata/529eef7a9194e0cbc1000255
//
// coding chalenge 127/366

function isAnagram(test, original) {
  const testArr = test.toLowerCase().split("");
  const originalArr = original.toLowerCase().split("");

  if (testArr.sort().join("") == originalArr.sort().join("")) {
    return true;
  } else {
    return false;
  }
}

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
