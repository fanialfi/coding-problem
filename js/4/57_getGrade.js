// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/
//
// tantangan coding 57/366

function getGrade(s1, s2, s3) {
  const score = (s1 + s2 + s3) / 3;

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}
