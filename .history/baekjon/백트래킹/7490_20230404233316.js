const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const M = +input[2];
const selected = [];
const answer = [];
dfs(0);

function dfs(depth) {
  if (depth === M - 1) {
    let sum = 1;
    let str = '1';
    for (let i = 2; i <= M; i++) {
      const oper = selected[i - 2];
      if (oper === ' ') {
        sum = Number(sum + i);
        str += str + i;
      }
      if (oper === '+') {
        sum += i;
        str += `+${i}`;
      }
      if (oper === '-') {
        sum += i;
        str += `-${i}`;
      }
    }
    if (sum === 0) answer.push(str);
    return;
  }

  selected.push('+');
  dfs(depth + 1);
  selected.pop();
  selected.push('-');
  dfs(depth + 1);
  selected.pop();
  selected.push(' ');
  dfs(depth + 1);
  selected.pop();
}
