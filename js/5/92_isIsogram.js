// https://www.codewars.com/kata/54ba84be607a92aa900000f1
//
// coding chalenge 92/366

function isIsogram(word) {
  looping: for (const idx in word) {
    const regexp = new RegExp(`${word[idx]}`, `gi`);
    // const count = letter.search(regexp);
    // method search hanya akan mengembalikan indeks dari kemunculan pertama pola regexp yang cocok
    // jika tidak ada yang cocok maka akan mengembalikan -1

    const match = word.match(regexp);
    if (match.length > 1) {
      return false;
    } else {
      continue looping;
    }
  }

  return true;
}

console.log(isIsogram("aba")); // false
console.log(isIsogram("isogram")); // true
console.log(isIsogram("Dermatoglyphics")); // true
console.log(isIsogram("moOse")); // false
console.log(isIsogram("isIsogram")); // false
