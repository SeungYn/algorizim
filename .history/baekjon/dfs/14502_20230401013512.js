const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

console.log(input);
const [n, m, ...map] = input[0].split(' ').map(Number);

console.log(map);
function dfs(x, y, count) {
  if (count === 3) {
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === '0') {
        count++;
        map[i][j] = '1';
        dfs(i, j, count);
        map[i][j] = '0';
        count--;
      }
    }
  }
}