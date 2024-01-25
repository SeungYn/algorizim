const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);

const visited = new Array(n).fill(false);
const currentArr = [];
let result = -Infinity;
dfs(0, currentArr, list, visited);
console.log(result);

function dfs(dep, currentArr, list, visited) {
  if (dep >= n) {
    let sum = 0;

    for (let i = 1; i < n; i++) {
      sum += Math.abs(currentArr[i - 1] - currentArr[i]);
    }
    result = Math.max(result, sum);
    return;
  }
  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    currentArr.push(list[i]);
    visited[i] = true;
    dfs(dep + 1, currentArr, list, visited);
    currentArr.pop();
    visited[i] = false;
  }
}
