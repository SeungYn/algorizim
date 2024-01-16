const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let index = 1;
let m,
  n,
  k,
  map,
  result = 0;
const testcase = +input[0];

for (let i = 0; i < testcase; i++) {
  [m, n, k] = input[index].split(' ').map(Number);

  map = Array.from({ length: m }, () => Array.from({ length: n }).fill(0));

  for (let j = index + 1; j < index + k + 1; j++) {
    const [x, y] = input[j].split(' ').map(Number);
    map[x][y] = 1;
  }

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (map[x][y]) {
        dfs(map, x, y);
        result++;
      }
    }
  }

  console.log(result);
  result = 0;

  index += k + 1;
}

function dfs(map, x, y) {
  map[x][y] = 0;

  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || nx >= map.length || ny < 0 || ny >= map[0].length) continue;
    if (!map[nx][ny]) continue;
    dfs(map, nx, ny);
  }
}
