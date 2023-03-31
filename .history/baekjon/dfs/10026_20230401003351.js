const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

const visited = Array.from({ length: n }, () => new Array(n).fill(false));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}
