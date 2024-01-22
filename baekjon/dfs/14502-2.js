const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map((s) => s.split(' ').map(Number));
let result = -Infinity;

const copyGraph = (origin) => () => origin.map((list) => [...list]);
function virus(x, y, graph) {
  graph[x][y] = 2;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (graph[nx][ny] !== 0) continue;
    virus(nx, ny, graph);
  }
}

function getClearCount(graph) {
  return graph.reduce(
    (p, c) => p + c.reduce((p, c) => (c === 0 ? p + 1 : p), 0),
    0
  );
}

function getClearCount(graph) {
  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) cnt++;
    }
  }
  return cnt;
}
let arr = [];
dfs(0, 0, 0, arr);
console.log(result);

function dfs(x, y, count, arr) {
  if (count === 3) {
    const copy = copyGraph(graph)();

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (copy[i][j] === 2) virus(i, j, copy);
      }
    }

    result = Math.max(getClearCount(copy), result);
    console.log(arr, getClearCount(copy));

    return;
  }

  for (let i = x; i < n; i++) {
    for (let j = y; j < m; j++) {
      if (graph[i][j] !== 0) continue;
      graph[i][j] = 1;
      arr.push([i, j]);
      dfs(i, j, count + 1, arr);
      graph[i][j] = 0;
      arr.pop();
    }
  }
}
// [ [ 1, 0 ], [ 1, 6 ], [ 0, 1 ] ] 5
