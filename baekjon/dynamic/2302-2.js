const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const dp = new Array(41);
const arr = Array.from({ length: n }, (_, i) => i + 1);
const res = [];
let start = 1;
for (const i of input.slice(1).map(Number)) {
  res.push(i - start);
  start = start + 1;
}

console.log(res);

dp[0] = 1;
dp[1] = 2;
dp[2] = 3;
dp[3] = 5;

for (let i = 4; i < 41; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}

console.log(new Date().toString());
