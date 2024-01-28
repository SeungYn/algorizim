// 2 21 42 84
const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let [a, b] = input[0].split(' ').map(Number);
let result = 0;

while (true) {
  if (b === a) return console.log(result + 1);
  if (b < a) return console.log(-1);

  if (b % 10 === 1) {
    b = parseInt(b / 10);
    result++;
    continue;
  }

  b /= 2;
  result++;
}
