const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = [[], ...input.slice(1).map((item) => item.split(' ').map(Number))];

const dp = new Array(n + 1).fill(0);
for (let i = 1; i <= n; i++) {
  const [t, p] = list[i];
  const nextDay = t + i;

  dp[i] = Math.max(dp[i], dp[i - 1]);

  if (nextDay <= n + 1) {
    dp[nextDay - 1] = Math.max(dp[nextDay - 1], dp[i - 1] + p);
  }
}

dp[n] = Math.max(dp[n], dp[n - 1]);
console.log(dp);
console.log(dp[n]);
