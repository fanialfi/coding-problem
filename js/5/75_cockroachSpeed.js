// https://www.codewars.com/kata/55fab1ffda3e2e44f00000c6/
//
// coding chalenge 75/366

/*
  1 kilometer => 100.000 cm
  1 jam       => 3600 detik

  untuk konversi dari km/h to cm/s kalikan nilai km/h ke 100000 ( untuk mengubah kilometer ke centimeter )
  kemudian bagi hasilnya dengan 3600 untuk mengubah jam menjadi detik
*/

// function cockroachSpeed(s) {
//   return Math.floor((s * 100000) / 3600);
// }

const cockroachSpeed = (s) => Math.floor((s * 100000) / 3600);

console.log(cockroachSpeed(1.08)); // 30
console.log(cockroachSpeed(1.09)); // 30
console.log(cockroachSpeed(0)); // 0
