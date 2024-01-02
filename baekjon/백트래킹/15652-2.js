const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const currentArr = [];
let answer = '';
dfs(1, 1);
console.log(answer);

function dfs(dep, v) {
  if (dep > m) return (answer += currentArr.join(' ') + '\n');

  for (let i = v; i <= n; i++) {
    currentArr.push(i);
    dfs(dep + 1, i);
    currentArr.pop();
  }
}
