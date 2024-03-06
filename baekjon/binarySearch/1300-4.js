const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k] = input.map(Number);
const arr = Array.from({ length: n }, (_, i) => i + 1);
let start = 1;
let end = n * n;
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  let sum = arr.reduce((p, c) => p + Math.min(parseInt(mid / c), n), 0);
  console.log(k, result, mid, sum);
  if (sum >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
