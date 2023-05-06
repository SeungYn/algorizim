const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const m = +input[1];

const graph = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(0);

for (let i = 2; i < 2 + m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const q = [1];

while (q.length > 0) {
  const now = q.shift();
  for (let next of graph[now]) {
    if (visited[next] || next === 1) continue;
    visited[next] = visited[now] + 1;
    q.push(next);
  }
}
console.log(visited.reduce((p, c, i, arr) => (c && c <= 2 ? 1 + p : p), 0));
