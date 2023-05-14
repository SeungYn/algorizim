const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const list = input.slice(1).map(Number);

const dp = new Array(101).fill(0);
dp[1] = 1;
dp[2] = 1;
dp[3] = 1;

for (let i = 4; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (const k of list) {
  console.log(dp[k]);
}
