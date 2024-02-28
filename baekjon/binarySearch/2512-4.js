const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const N = +input[0];
const LIST = input[1].split(' ').map(Number);
const MAX_SUM = +input[2];

let start = 0;
let end = MAX_SUM;
let result = 0;

if (LIST.reduce((a, b) => a + b) <= MAX_SUM)
  return console.log(Math.max(...LIST));

while (start <= end) {
  const mid = parseInt((start + end) / 2);
  const sumList = LIST.map((v) => (v <= mid ? v : mid)).reduce((a, b) => a + b);

  if (sumList <= MAX_SUM) {
    start = mid + 1;
    result = mid;
  } else end = mid - 1;
}

console.log(result);
