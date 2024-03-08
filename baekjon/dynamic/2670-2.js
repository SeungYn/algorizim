const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input.slice(1).map(Number);

for (let i = 1; i < n; i++) {
  list[i] = list[i - 1] * list[i] > list[i] ? list[i - 1] * list[i] : list[i];
}

console.log(Math.max(...list).toFixed(3));
