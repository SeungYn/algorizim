const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const map = input.slice(1).map((str) => str.split(' ').map(Number));

let visited = Array.from({ length: n }, () => false);
let answer = Infinity;
let currentArr = [];
let selectedNode = [];

currentArr = [];
selectedNode = [];
visited = Array.from({ length: n }, () => false);
dfs(0, 0);

console.log(answer);

function dfs(dep, prevNode) {
  if (dep === n - 1) {
    if (!map[prevNode][0]) return;
    return (answer = Math.min(
      answer,
      currentArr.reduce((p, c) => p + c) + map[prevNode][0]
    ));
  }

  for (let i = 1; i < n; i++) {
    if (visited[i] || !map[prevNode][i]) continue;
    currentArr.push(map[prevNode][i]);
    visited[i] = true;
    dfs(dep + 1, i);
    visited[i] = false;
    currentArr.pop();
  }
}
