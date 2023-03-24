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

  for (let i = 1; i < m; i++) {
    dfs(i, i);
  }
  //console.log(parent);
  break;

  index += n + 1;
}

function dfs(start, parent) {
  if (visited[start]) return;
  visited[start] = true;
  console.log(parent);
  for (let next of graph[start]) {
    if (visited[next]) continue;
    parent[next] = start;
    dfs(next, parent);
  }
}
