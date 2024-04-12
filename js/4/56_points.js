// https://www.codewars.com/kata/5bb904724c47249b10000131/
//
// tantangan coding 56/366

function points(games) {
  let point = 0;
  for (const match of games) {
    let [x, y] = match.split(":");

    if (+x > +y) {
      point += 3;
    } else if (+x == +y) {
      point += 1;
    }
  }
  return point;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
