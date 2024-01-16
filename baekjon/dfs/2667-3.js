const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const n = +input[0];
const map = input.slice(1).map((s) => s.split('').map(Number));
const visited = Array.from({ length: n }, () => new Array(n).fill(false));
let count = 0;
let result;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!!map[i][j] && !visited[i][j]) {
      count++;

      dfs(count, map, i, j);
    }
  }
}
result = new Array(count).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!!map[i][j]) {
      result[map[i][j] - 1]++;
    }
  }
}

console.log(count);
console.log(result.sort((a, b) => a - b).reduce((p, c) => p + '\n' + c));

function dfs(swap, map, x, y) {
  if (visited[x][y]) return;
  visited[x][y] = true;
  map[x][y] = swap;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!map[nx][ny] || visited[nx][ny]) continue;
    dfs(swap, map, nx, ny);
  }
}
