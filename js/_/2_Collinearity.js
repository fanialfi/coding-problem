// https://www.codewars.com/kata/65ba420888906c1f86e1e680/train/javascript

function collinearity(x1, y1, x2, y2) {
  if ((x1 * y2) - (x2 * y1) == 0) {
    return true;
  }
  return false;
}