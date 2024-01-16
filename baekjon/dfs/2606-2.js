const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = [input[0], input[1]].map(Number);
const list = input.slice(2).map((s) => s.split(' ').map(Number));
const map = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);
let result = 0;

for (const s of list) {
  const [start, end] = s;
  map[start].push(end);
  map[end].push(start);
}

solution();
console.log(result);

function solution() {
  visited[1] = true;
  dfs(1);
}

function dfs(node) {
  visited[node] = true;
  for (const next of map[node]) {
    if (visited[next]) continue;
    result++;
    dfs(next);
  }
}
