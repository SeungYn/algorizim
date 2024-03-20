const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = [0].concat(input.slice(1).map(Number));

let visited = new Array(n + 1).fill(false);
let finished = new Array(n + 1).fill(false);
let result = [];

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i, list, visited, finished, result);
}

console.log(result.length);
result.sort((a, b) => a - b);
result.forEach((e) => console.log(e));

function dfs(x, list, visited, finished, result) {
  visited[x] = true;
  let next = list[x];

  if (!visited[next]) {
    dfs(next, list, visited, finished, result);
  } else if (!finished[next]) {
    while (next !== x) {
      result.push(next);
      next = list[next];
    }
    result.push(x);
  }

  finished[x] = true;
}
