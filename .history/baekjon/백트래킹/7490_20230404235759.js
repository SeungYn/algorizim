const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let n = +input[0];
let M = 0;
let selected = [];
let answer = [];
let index = 1;

while (n--) {
  answer = [];
  selected = [];
  M = +input[index];
  dfs(0);
  answer.forEach((i) => console.log(i));
  console.log();
  index++;
}

function dfs(depth) {
  if (depth === M - 1) {
    let sum = 1;
    let str = '1';

    for (let i = 2; i <= M; i++) {
      const oper = selected[i - 2];

      if (oper === ' ') {
        str += ' ' + i;
      }
      if (oper === '+') {
        str += `+${i}`;
      }
      if (oper === '-') {
        str += `-${i}`;
      }
    }
    sum = eval(str.split(' ').join(''));

    if (sum === 0) {
      answer.push(str);
    }
    return;
  }

  selected.push(' ');
  dfs(depth + 1);
  selected.pop();
  selected.push('+');
  dfs(depth + 1);
  selected.pop();
  selected.push('-');
  dfs(depth + 1);
  selected.pop();
}
