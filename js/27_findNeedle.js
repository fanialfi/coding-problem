// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/

function findNeedle(haystack) {
  const data = "needle"

  for (const index in haystack) {
    if (haystack[index] == data) {
      return `found the needle at position ${index}`
    }
  }

  return undefined, "Your function didn't return anything"
}