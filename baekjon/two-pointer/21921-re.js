const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const data = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, x] = data[0].split(' ').map(Number);
const list = data[1].split(' ').map(Number);
if (list.reduce((p, c) => p + c) === 0) return console.log('SAD');
let answer = 1;
let start = 0;
let end = x - 1;
let sum = list.slice(start, x).reduce((p, c) => p + c);
let max = sum;

while (end < n) {
  start += 1;
  end += 1;
  if (end >= n) break;
  sum = sum + list[end] - list[start - 1];

  if (max === sum) {
    answer++;
  } else if (sum > max) {
    answer = 1;
    max = sum;
  }
}

if (max === 0) console.log('SAD');
else {
  console.log(max);
  console.log(answer);
}
