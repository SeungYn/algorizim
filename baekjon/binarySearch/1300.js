const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const k = +input[1];

let start = 1;
let end = 16; //10 ** 5;
let result = 0;
while (start < end) {
  const mid = parseInt((start + end) / 2);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += Math.min(n, parseInt(mid / i));
  }
  console.log(start, mid, end);
  if (sum >= k) {
    end = mid - 1;
    result = mid;
  } else {
    start = mid + 1;
  }
}

console.log(result);
