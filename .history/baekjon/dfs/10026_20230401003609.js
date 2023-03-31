const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

const visited = Array.from({ length: n }, () => new Array(n).fill(false));
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {}
}

function dfs(x, y, color, subColor) {
  visited[x][y] = true;
}
