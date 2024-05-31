// https://www.codewars.com/kata/56606694ec01347ce800001b
//
// coding chalenge 106/366

/*
mengimplementasikan function yang menerima 3 bilangan integer,
function tersebut harus mengembalikan true jika segitiga dapat dibuat dari sisi sisi yang panjangnya tertentu,
dan mengembalikan false di kasus yang lain
di kasus ini segitiga harus memiliki permukaan lebih dari 0
*/

// function isTriangle(a, b, c) {
//   if (a + b > c && a + c > b && b + c > a) {
//     return true;
//   } else {
//     return false;
//   }
// }

const isTriangle = (a, b, c) => a + b > c && a + c > b && b + c > a;

/*
 * untuk bisa membentuk segitiga ada syarat yang harus dipenuhi oleh segitiga tersebut
 * sisi pertama + sisi kedua > sisi ketiga
 * sisi pertama + sisi ketiga > sisi kedua
 * sisi kedua + sisi ketiga > sisi pertama
 */

function calculateArea(a, b, c) {
  if (isTriangle(a, b, c)) {
    const s = (a + b + c) / 2;
    area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    return Number(area.toFixed(3));
  } else {
    return `${a}, ${b}, ${c} is invalid`;
  }
}

console.log(calculateArea(1, 2, 2));
