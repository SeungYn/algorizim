const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let result = '';
const selected = [];

dfs(0);
console.log(result);

function dfs(depth) {
  if (depth === m) {
    let str = '';
    str = selected.reduce((p, c) => p + c + ' ', '');
    str += '\n';
    result += str;
    return;
  }

  for (let i = 1; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1);
    selected.pop();
  }
}
