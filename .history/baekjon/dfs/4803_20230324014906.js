const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let index = 0;
while (true) {
  console.log(index);
  const [m, n] = input[index].split(' ').map(Number);
  if (m === 0 && n === 0) return;

  var graph = Array.from({ length: m + 1 }, () => []);
  var parent = Array.from({ length: m + 1 }, (_, i) => i);
  var visited = new Array(m + 1).fill(false);

  for (let i = index + 1; i < index + 1 + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i < m + 1; i++) {
    dfs(i, i);
  }

  const result = new Set(parent.slice(1));
  if (result === 1) console.log('There is one tree.');
  else if (result === 0) console.log('No trees.');
  else console.log(`A forest of ${result.size} trees.`);

  index += n + 1;
}

function dfs(start, pare) {
  if (visited[start]) return;

  visited[start] = true;

  for (let next of graph[start]) {
    if (visited[next]) continue;
    parent[next] = pare;
    dfs(next, pare);
  }
}
