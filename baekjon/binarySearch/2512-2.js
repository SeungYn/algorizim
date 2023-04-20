const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
const budget = +input[2];

console.log(list, budget);

let result = 0;
let start = 1;
let end = list.reduce((p, c) => Math.max(c), 0);

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  const sum = list.reduce((p, c) => p + Math.min(mid, c), 0);

  if (sum <= budget) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(result);
