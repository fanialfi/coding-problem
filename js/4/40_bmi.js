// https://www.codewars.com/kata/57a429e253ba3381850000fb/
//
// tantangan coding 40/366

function bmi(weight, height) {
  const bmi = weight / height ** 2;
  console.log(bmi);
  if (bmi <= 18.5) {
    return "Underweight";
  } else if (bmi <= 25.0) {
    return "Normal";
  } else if (bmi <= 30.0) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

console.log(bmi(80, 1.8)); // Normal
