const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const dp = [];

for (let i = 1; i <= n; i++) {
  dp.push(input[i].split(' ').map(Number));
}

for (let i = 1; i < n; i++) {
  dp[i][0] = Math.min(dp[i - 1][1], dp[i - 1][2]) + dp[i][0];
  dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][2]) + dp[i][1];
  dp[i][2] = Math.min(dp[i - 1][0], dp[i - 1][1]) + dp[i][2];
}

console.log(Math.min(...dp[n - 1]));
