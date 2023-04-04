const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(Number);
const visited = Array.from({ length: N }, () => false);
const selected = [];
let answer = '';
function dfs(depth) {
  if (depth === M) {
    answer += selected.reduce((p, c) => p + ' ' + c, '');
    answer += '\n';
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
