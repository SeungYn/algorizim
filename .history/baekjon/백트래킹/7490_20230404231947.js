const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const M = +input[2];
const selected = [];

function dfs(depth) {
  if (depth === M - 1) {
    return;
  }

  selected.push('+');
  dfs(depth + 1);
  selected.push('-');
  dfs(depth + 1);
  selected.push(' ');
  dfs(depth + 1);
}
