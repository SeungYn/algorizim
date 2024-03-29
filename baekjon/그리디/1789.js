const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
let current = 0;
let sum = 0;

while (sum <= n) {
  current++;
  sum += current;
}

console.log(current - 1);
