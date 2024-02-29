const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k] = input.map(Number);
let start = 1;
let end = n * n;
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const count = Array.from({ length: n }, (_, i) => i + 1).reduce(
    (p, c) => p + Math.min(parseInt(mid / c), n),
    0
  );

  if (count >= k) {
    result = mid;
    end = mid - 1;
  } else start = mid + 1;
}

console.log(result);
