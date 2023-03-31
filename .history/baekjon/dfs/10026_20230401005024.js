const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, ...map] = input;
let colorCnt = 0;
let colorWeakness = 0;
const visited = Array.from({ length: n }, () => new Array(n).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      dfs(i, j, map[i][j], false);
      colorCnt++;
    }
  }
}

function dfs(x, y, color, isWeakNess) {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (color === map[nx][ny]) {
      dfs(nx, ny, color, isWeakNess);
      if (
        (color === 'R' || color === 'G') &&
        (map[nx][ny] === 'R' || map[nx][ny] === 'G')
      ) {
        dfs(nx, ny, color, isWeakNess);
      }
    }
  }
}
