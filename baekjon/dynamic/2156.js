const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const m = +input[1];
const list = input.slice(2).map(Number);

const dp = new Array(50).fill(0);
dp[0] = 1;
dp[1] = 1;

for (let i = 2; i < 50; i++) {
  dp[i] = dp[i - 1] + dp[i - 2];
}
let answer = 1;
let start = 0;
const arr = [];
for (let i of list) {
  arr.push(i - start - 1);
  start = i;
}
arr.push(n - start);
console.log(arr.reduce((p, c, i) => p * dp[arr[i]], 1));
