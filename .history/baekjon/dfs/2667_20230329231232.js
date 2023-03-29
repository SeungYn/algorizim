const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const map = [];
const visited = Array.from({ length: n }, () => new Array(n).fill(false));
let apartmentCount = 0;
let result = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split('').map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && map[i][j]) {
      apartmentCount++;
      const cnt = dfs(i, j, 1);
      cnt && result.push(cnt);
    }
  }
}

console.log(apartmentCount);
result.sort((a, b) => a - b).forEach((i) => console.log(i));

function dfs(x, y, count) {
  let localCount = count;
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

    if (!visited[nx][ny] && map[nx][ny]) {
      localCount += dfs(nx, ny, count);
    }
  }

  return localCount;
}

/**
 * 노드를 하나씩 증가하는 방식으로 접근했는데 그게 아님 결국 나도 노드의 갯수를 세서 다 더해주는 거였음
 *
 */
