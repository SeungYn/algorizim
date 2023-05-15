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
const dp = input.slice(1).map(Number);
const list2 = input.slice(1).map(Number);
// 0.1 0.7 1.3 0.9 1.4 0.8 0.7 1.4
// 0.1 0.7 1.3 1.1

for (let i = 1; i < n; i++) {
  list[i] = Math.max(list[i], list[i - 1] * list[i]);
}

for (let i = 0; i < n; i++) {
  let max = list2[i];
  console.log(max);
  for (let j = i + 1; j < n; j++) {
    max *= list[j];
    console.log(max, 'max * list[' + j + ']: ', max, list[j]);
    dp[i] = Math.max(dp[i], max);
  }
  break;
}

console.log(dp);

console.log(Math.max(...list).toFixed(3));
