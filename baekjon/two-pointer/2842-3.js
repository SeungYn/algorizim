const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
let map = [];
let height = [];
const dx = [0, -1, -1, -1, 0, 1, 1, 1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
let cnt = 0;
let startX = 0,
  startY = 0;
let left = 0,
  right,
  middle;
const set = new Set();
let target = 0;
let result = Infinity;

map = input.slice(1, 1 + n).map((line) => line.split(''));
height = input
  .slice(1 + n, 1 + n + n)
  .map((line) => line.split(' ').map(Number));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    set.add(height[i][j]);

    if (map[i][j] === 'K') {
      target++;
    } else if (map[i][j] === 'P') {
      startX = i;
      startY = j;
    }
  }
}
const distance = Array.from(set.values());
distance.sort((a, b) => a - b);

for (let i = 0; i < distance.length; i++) {
  if (distance[i] === height[startX][startY]) {
    right = i;
    middle = i;
    break;
  }
}

function dfs(x, y, visited) {
  if (visited[x][y]) return;
  visited[x][y] = true;

  if (map[x][y] === 'K') cnt++;

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!visited[nx][ny]) {
      if (
        height[nx][ny] >= distance[left] &&
        height[nx][ny] <= distance[right]
      ) {
        dfs(nx, ny, visited);
      }
    }
  }
}

while (true) {
  while (right < distance.length) {
    cnt = 0;
    visited = Array.from({ length: n }, () => new Array(n).fill(false));

    dfs(startX, startY, visited);

    if (cnt < target) right++;
    else break;
  }
  if (cnt === target) {
    result = Math.min(result, distance[right] - distance[left]);
  }

  left++;
  if (left > middle || right >= distance.length) break;
}

console.log(result);
