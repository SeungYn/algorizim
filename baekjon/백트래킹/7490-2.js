const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const testcase = +input[0];
const nums = input.slice(1).map((i) => +i);
const result = [];

let answer = '';

for (let i = 0; i < testcase; i++) {
  const n = nums[i];
  dfs(1, n, 0);
  answer += '\n';
}

function dfs(v, n, len) {
  if (len === n) {
    const str = result.join('');
    const sum = eval(result.reduce((p, c) => (c === ' ' ? p : p + c), ''));
    if (!sum) answer += str + '\n';
    return;
  }

  for (let i = v; i <= n; i++) {
    if (len === n - 1) {
      result.push(i);
      dfs(i + 1, n, len + 1);
      result.pop();
      continue;
    }
    result.push(i);
    len !== n - 1 && result.push(' ');
    dfs(i + 1, n, len + 1);
    result.pop();
    len !== n - 1 && result.pop();

    result.push(i);
    len !== n - 1 && result.push('+');
    dfs(i + 1, n, len + 1);
    len !== n - 1 && result.pop();
    result.pop();

    result.push(i);
    len !== n - 1 && result.push('-');
    dfs(i + 1, n, len + 1);
    len !== n - 1 && result.pop();
    result.pop();
  }
}

console.log(answer);
