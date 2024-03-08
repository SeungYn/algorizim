const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];

const list = input.slice(1).map(Number);
const dp = new Array(list.length);
dp[0] = list[0];
dp[1] = list[0] + list[1];
dp[2] = Math.max(list[2] + list[1], list[0] + list[1], list[0] + list[2]);
for (let i = 3; i < list.length; i++) {
  dp[i] = Math.max(
    dp[i - 1],
    list[i] + list[i - 1] + dp[i - 3],
    list[i] + dp[i - 2]
  );
}

console.log(dp[list.length - 1]);
