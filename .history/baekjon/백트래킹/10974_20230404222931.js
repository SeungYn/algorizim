const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const N = +input[0];
const visited = new Array(false).fill(N);
const selected = [];
let answer = '';

console.log(N);
console.log(answer);
function dfs(depth) {
  if (depth === N) {
    answer += selected.join(' ');
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (!visited) continue;
    selected.push(i);
    visited[i] = true;
    dfs(depth + 1);
    visited[i] = false;
    selected.pop();
  }
}
