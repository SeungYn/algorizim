const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((i) => +i);
const visited = Array.from({ length: n + 1 }, () => false);
const currentArr = [];

dfs(1, 1);

function dfs(dep, v) {
  if (dep > m) return console.log(currentArr.join(' '));

  for (let i = v; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    currentArr.push(i);
    dfs(dep + 1, i + 1);
    visited[i] = false;
    currentArr.pop();
  }
}
