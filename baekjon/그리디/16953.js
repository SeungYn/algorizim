const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [a, b] = input[0].split(' ').map(Number);

let cnt = 0;

while (b > a) {
  if (b % 2 === 0) {
    b = parseInt(b / 2);
  } else if (b % 10 === 1) {
    b = Number(b.toString().slice(0, -1));
  } else {
    break;
  }

  cnt++;
}

console.log(a === b ? cnt + 1 : -1);
