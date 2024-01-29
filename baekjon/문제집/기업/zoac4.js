const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/문제집/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [h, w, n, m] = input[0].split(' ').map(Number);

console.log(
  (parseInt((w - 1) / (m + 1)) + 1) * (parseInt((h - 1) / (n + 1)) + 1)
);
