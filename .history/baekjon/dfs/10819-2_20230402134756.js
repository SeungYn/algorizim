const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
const result = [];
const visited = new Array(n).fill(false);
let maxValue = -Infinity;

dfs(0);
console.log(maxValue);

function dfs(depth) {
  if (depth === n) {
    let sum = 0;
    for (let i = 0; i < n - 1; i++) {
      sum += Math.abs(result[i] - result[i - 1]);
    }
    console.log(sum);
    maxValue = Math.max(sum, maxValue);
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(arr[i]);

    dfs(depth + 1);
    visited[i] = false;
    result.pop();
  }
}
