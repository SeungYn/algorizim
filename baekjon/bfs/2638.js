const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m] = input[0].split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
let count = 0;
const graph = [];
for (let i = 1; i <= n; i++) {
  const line = input[i].split(' ').map(Number);
  graph.push(line);
}

start();

console.log(count);

function start() {
  let graph2 = graph;
  let flag = true;
  while (flag) {
    count++;
    graph2 = bfs(graph2);
    graph2 = meltCheese(graph2);

    if (!isThereCheeseLeft(graph2)) {
      flag = false;
    }
  }
}

function bfs(graph) {
  const visited = Array.from({ length: n }, () => new Array(m).fill(0));
  const q = [[0, 0]];
  visited[0][0] = 1;

  while (q.length > 0) {
    const [x, y] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + x;
      const ny = dy[i] + y;

      if (nx < 0 || nx >= n || ny < 0 || ny > m) continue;
      if (visited[nx][ny]) continue;
      if (graph[nx][ny] >= 1) graph[nx][ny]++;
      else {
        q.push([nx, ny]);
        visited[nx][ny] = 1;
      }
    }
  }

  return graph;
}

function meltCheese(graph) {
  const copyGraph = graph.map((line) => [...line]);
  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[0].length; j++) {
      if (copyGraph[i][j] >= 3) copyGraph[i][j] = 0;
      else if (copyGraph[i][j] === 2) copyGraph[i][j] = 1;
    }
  }
  return copyGraph;
}

function isThereCheeseLeft(graph) {
  const copy = graph.flat(2);
  return !!copy.reduce((p, c) => p + c, 0);
}
