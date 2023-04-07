const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const graph = [[0]];
const visited = new Array(n + 1).fill(false);
const result = [];
let minValue = Infinity;
for (let i = 1; i < n + 1; i++) {
  graph.push([0, ...input[i].split(' ').map(Number)]);
}

dfs(1);
console.log(minValue);
function dfs(depth) {
  if (depth === n) {
    let sum = 0;
    let cur = 1;
    for (let i = 0; i < n - 1; i++) {
      const nextNode = result[i];
      const value = graph[cur][nextNode];
      if (value === 0) return;
      sum += value;
      cur = nextNode;
    }
    let cost = graph[cur][1];
    if (cost === 0) return;
    sum += graph[cur][1];
    minValue = Math.min(minValue, sum);
  }

  for (let i = 2; i < n + 1; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(depth + 1);
    result.pop();
    visited[i] = false;
  }
}
