const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const arr = new Array(n + 1).fill(0);
const result = [];
let count = 0;

for (let i = 1; i <= n; i++) {
  arr[i] = +input[i];
}

for (let i = 1; i <= n; i++) {
  if (isMatch(i, arr)) {
    result.push(i);
  }
}

console.log(result.sort((a, b) => a - b));

function isMatch(parent, arr) {
  const child = arr[parent];
  return arr[child] === parent;
}
