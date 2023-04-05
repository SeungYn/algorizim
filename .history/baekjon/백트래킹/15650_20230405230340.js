const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let result = '';
const selected = [];
const visited = new Array(n + 1).fill(false);
dfs(0, 1);

function dfs(depth, start) {
  if (depth === m) {
    let str = '';
    str = selected.reduce((p, c) => p + c + ' ', '');
    str += '\n';
    result += str;
    return;
  }

  for (let i = start; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1, i + 1);
    selected.pop();
    visited[i] = false;
  }
}
