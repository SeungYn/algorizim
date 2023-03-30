const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const arr = new Array(n + 1).fill(0);
const visited = new Array(n + 1).fill(false);
const result = [];
let count = 0;

for (let i = 1; i <= n; i++) {
  arr[i] = +input[i];
}

for (let i = 1; i <= n; i++) {
  if (!isMatch(i, 0, arr)) {
    result.push(arr[i]);
  }
}

console.log(result.length);
result.forEach((i) => console.log(i));

function isMatch(current, prev, arr) {
  visited[current] = true;
  const child = arr[current];
  if (child === current) return false;
  if (!visited[child]) return isMatch(child, current, arr);
  else {
    if (prev !== child) return false;
  }

  return true;
}
