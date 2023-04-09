const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [r, c] = input[0].split(' ').map(Number);
const list = input.slice(1);
let maxValue = -Infinity;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const selected = [[0, 0]];
const set = new Set(list[0][0]);
const visited = new Array(r).fill(new Array(c).fill(false));

let cnt = 0;

dfs(0, 0, 1);

console.log(maxValue);

function dfs(x, y, cnt) {
  maxValue = Math.max(maxValue, cnt);

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;

    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (set.has(list[nx][ny])) continue;

    set.add(list[nx][ny]);
    //selected.push([nx, ny]);
    dfs(nx, ny, cnt + 1);
    set.delete(list[nx][ny]);
    //selected.pop();
  }
}

function check(x, y) {
  for (const [a, b] of selected) {
    if (list[a][b] === list[x][y]) return false;
  }

  return true;
}
