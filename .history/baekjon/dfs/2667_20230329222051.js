const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const map = [];
const visited = Array.from({ length: n }, () => new Array(n).fill(false));
let apartmentCount = 0;
let result = [];

for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split('').map(Number));
}

console.log(map);
