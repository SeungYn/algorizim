const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const map = [];
const height = [];
const dx = [0, -1, -1, -1, 0, 1, 1, 1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
let cnt = 0;

for (let i = 1; i <= n; i++) {
  const list = input[i].split('');
  map.push(list);
}

for (let i = 1 + n; i <= n + n; i++) {
  const list = input[i].split(' ').map(Number);
  height.push(list);
}

function dfs(x, y) {
  if (visited[x][y]) return;
  visited[x][y] = true;
  if (map[x][y] === 'K') cnt++;

  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (!visited[nx][ny]) {
      if (
        height[nx][ny] >= uniqueHeight[left] &&
        height[nx][ny] <= uniqueHeight[right]
      ) {
        dfs(nx, ny);
      }
    }
  }
}

let uniqueHeight = new Set();
let visited;
let target = 0;
let result = Infinity;
let startX = 0;
let startY = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    uniqueHeight.add(height[i][j]);
    if (map[i][j] === 'P') {
      startX = i;
      startY = j;
    }
    if (map[i][j] === 'K') target += 1;
  }
}

uniqueHeight = [...uniqueHeight];
uniqueHeight.sort((a, b) => a - b);

let left = 0;
let right = 0;
let middle = 0;

for (let i = 0; i < uniqueHeight.length; i++) {
  if (uniqueHeight[i] === height[startX][startY]) {
    right = i;
    middle = i;
    break;
  }
}
console.log(uniqueHeight, middle);

while (true) {
  while (true) {
    visited = [];
    for (let i = 0; i < n; i++) visited.push(new Array(n).fill(false));
    cnt = 0;

    dfs(startX, startY);

    if (right < uniqueHeight.length - 1 && cnt < target) right++;
    else break;
  }

  if (cnt === target) {
    result = Math.min(result, uniqueHeight[right] - uniqueHeight[left]);
  }
  left++;

  if (left >= uniqueHeight.length || right >= uniqueHeight.length) break;
}

console.log(result);
