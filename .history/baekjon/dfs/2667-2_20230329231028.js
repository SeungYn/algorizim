const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const map = [];
let result = [];
let apartCount = 0;

for (let i = 0; i < n; i++) {
  map.push(input[i + 1].split('').map(Number));
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] > 0) {
      apartCount++;
      result.push(dfs(i, j));
    }
  }
}

console.log(apartCount);
console.log(result.sort().forEach((i) => console.log(i)));

function dfs(x, y) {
  if (x < 0 || x >= n || y < 0 || y >= n) return 0;
  if (map[x][y] >= 1) {
    map[x][y] = -1;
    let count = 1;
    count += dfs(x - 1, y);
    count += dfs(x + 1, y);
    count += dfs(x, y - 1);
    count += dfs(x, y + 1);
    return count;
  }
  return 0;
}
