const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const selected = [];
function dfs(depth) {
  if (depth === m) {
    console.log([1, 3]);
    return;
  }
}
