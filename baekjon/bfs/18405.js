const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const graph = Array.from({ length: n + 1 }).map(() => new Array(n + 1).fill(0));
const [s, x, y] = input[n + 1].split(' ').map(Number);
const virusPosition = [];

for (let i = 0; i < n; i++) {
  const line = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    graph[i + 1][j + 1] = line[j];
    if (line[j] !== 0) virusPosition.push([i + 1, j + 1, line[j]]);
  }
}

virusPosition.sort((a, b) => a[2] - b[2]);
bfs(s, virusPosition);

console.log(graph[x][y]);

function bfs(s, virusPosition) {
  const q = [];
  for (const [x, y, type] of virusPosition) {
    q.push([x, y, 1, type]);
  }

  while (q.length > 0) {
    const [cx, cy, cs, type] = q.shift();
    if (cs > s) break;
    for (let [dx, dy] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      const nx = dx + cx;
      const ny = dy + cy;
      if (nx < 1 || nx > n || ny < 1 || ny > n) continue;
      if (graph[nx][ny] !== 0) continue;
      graph[nx][ny] = type;
      q.push([nx, ny, cs + 1, type]);
    }
  }
}
