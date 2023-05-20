const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);

list.reverse();
const dp = new Array(n).fill(1);

for (let i = 1; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (list[i] > list[j]) dp[i] = Math.max(dp[j] + 1, dp[i]);
  }
}

console.log(n - Math.max(...dp));
