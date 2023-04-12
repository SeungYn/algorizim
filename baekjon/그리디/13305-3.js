const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const dist = input[1].split(' ').map(Number);
const data = input[2].split(' ').map(Number);
const newData = [];
let minValue = Infinity;
for (let i = 0; i < n; i++) {
  if (minValue > data[i]) {
    newData[i] = data[i];
    minValue = data[i];
    continue;
  }
  newData[i] = minValue;
}
let sum = 0n;
for (let i = 0; i < n - 1; i++) {
  sum += BigInt(newData[i]) * BigInt(dist[i]);
}

console.log(String(sum));
