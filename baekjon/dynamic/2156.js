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

const dp = new Array(n).fill(0);
dp[0] = list[0];
dp[1] = list[0] + list[1];
dp[2] = Math.max(list[0] + list[1], list[2] + list[0], list[2] + list[1]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    list[i] + dp[i - 2],
    list[i] + list[i - 1] + dp[i - 3]
  );
}

console.log(Math.max(...dp));
