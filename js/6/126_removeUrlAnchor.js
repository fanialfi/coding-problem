// https://www.codewars.com/kata/51f2b4448cadf20ed0000386
//
// coding chalenge 126/366

// function removeUrlAnchor(url) {
//   const regexp = new RegExp(/#[A-Z]+/gi);
//   const result = url.match(regexp);
//   return url.split(result).join("");
// }

const removeUrlAnchor = (url) => url.split(/#[a-z]+/gi).join("");

console.log(removeUrlAnchor("fanialfi.space#about")); // fanialfi.space
