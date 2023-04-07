const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const n = +fs.readFileSync(PATH).toString().trim().split('\n')[0];
const selected = [];
let cnt = 0;
const visited = new Array(n).fill(false);

dfs(0);
console.log(cnt);

function dfs(row) {
  if (row === n) {
    cnt++;
    return;
  }

  for (let i = 0; i < n; i++) {
    if (visited[row] || !checkOfNQueen(row, i)) continue;
    visited[row] = true;
    selected.push([row, i]);
    dfs(row + 1);
    visited[row] = false;
    selected.pop();
  }
}

function checkOfNQueen(x, y) {
  for (const [a, b] of selected) {
    if (a === x || b === y) return false;
    if (Math.abs(a - x) === Math.abs(b - y)) return false;
  }
  return true;
}
