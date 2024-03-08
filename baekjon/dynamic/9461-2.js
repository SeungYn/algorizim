const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const t = +input[0];

const dp = new Array(101);
dp[0] = 1;
dp[1] = 1;
dp[2] = 1;

for (let i = 3; i < 101; i++) {
  dp[i] = dp[i - 2] + dp[i - 3];
}

for (let i = 1; i < input.length; i++) {
  const n = +input[i];
  console.log(dp[n - 1]);
}
