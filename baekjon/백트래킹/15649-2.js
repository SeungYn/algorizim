const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map((v) => +v);

const selectedNum = [];
const visited = Array.from({ length: n + 1 }, () => false);
const result = [];
let answer = '';
const dfs = (len) => {
  if (len === m) {
    return (answer += selectedNum.join(' ') + '\n');
  }

  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selectedNum.push(i);
    dfs(len + 1);
    visited[i] = false;
    selectedNum.pop();
  }
};

dfs(0);
console.log(answer);
