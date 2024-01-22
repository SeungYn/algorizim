const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const graph = input.slice(1);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const visited1 = Array.from({ length: n }, () => new Array(n).fill(false));
const visited2 = Array.from({ length: n }, () => new Array(n).fill(false));
let result1 = 0;
let result2 = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited1[i][j]) continue;
    dfs(i, j, visited1, graph);
    result1++;
  }
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited2[i][j]) continue;
    dfs2(i, j, visited2, graph);
    result2++;
  }
}

console.log(result1, result2);

function dfs(x, y, visited, graph) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (visited[nx][ny] || graph[nx][ny] !== graph[x][y]) continue;
    dfs(nx, ny, visited, graph);
  }
}

function dfs2(x, y, visited, graph) {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (visited[nx][ny]) continue;
    if (['R', 'G'].includes(graph[x][y])) {
      if (!['R', 'G'].includes(graph[nx][ny])) continue;
    } else if (graph[nx][ny] !== graph[x][y]) continue;
    dfs2(nx, ny, visited, graph);
  }
}
