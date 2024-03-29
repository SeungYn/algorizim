const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const signList = input[1].split(' ');
const selected = [];
const visited = [];
let maxValue = -Infinity;
let minValue = Infinity;

dfs(0, 0);
console.log(maxValue);
console.log(minValue);

function dfs(start, depth) {
  if (depth === n + 1) {
    if (!isSizeComparison(signList, selected)) return;
    maxValue = max(maxValue, selected.join(''));
    minValue = min(minValue, selected.join(''));
    return;
  }

  for (let i = 0; i <= 9; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    dfs(i + 1, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}

function isSizeComparison(signList, selected) {
  let beforeNum = selected[0];

  for (let i = 0; i < signList.length; i++) {
    if (!eval(`${beforeNum} ${signList[i]} ${selected[i + 1]}`)) return false;
    beforeNum = selected[i + 1];
  }
  return true;
}

function max(a, b) {
  if (Number(a) >= Number(b)) return a;
  return b;
}

function min(a, b) {
  if (Number(a) >= Number(b)) return b;
  return a;
}
