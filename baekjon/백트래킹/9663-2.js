const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const currentPosition = [];
let answer = 0;

dfs(0);

console.log(answer);

function dfs(dep) {
  if (dep >= n) {
    return (answer += 1);
  }

  for (let i = 0; i < n; i++) {
    if (!check(dep, i)) continue;
    currentPosition.push([dep, i]);
    dfs(dep + 1);
    currentPosition.pop();
  }
}

function check(x, y) {
  for (let [ox, oy] of currentPosition) {
    if (oy === y) return false;
    if (ox === x) return false;
    if (Math.abs(ox - x) === Math.abs(oy - y)) return false;
  }
  return true;
}
