const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];

const dp = Array.from({ length: n + 1 }, () => new Array(10).fill(0));

for (let i = 1; i < 10; i++) {
  dp[1][i] = 1;
}

for (let i = 2; i < n + 1; i++) {
  for (let j = 0; j < 10; j++) {
    if (j === 0) {
      dp[i][j] = dp[i - 1][1];
    } else if (j === 9) {
      dp[i][j] = dp[i - 1][8];
    } else {
      dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % 1000000000;
    }
  }
}

console.log(dp[n].reduce((p, c) => (p + c) % 1000000000, 0));
