const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1)[0].split(' ').map(Number);
const dp = new Array(n).fill(1);
list.reverse();
dp[0] = 1;

for (let i = 1; i < list.length; i++) {
  for (let j = 0; j < i; j++) {
    if (list[j] < list[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  }
}

console.log(n - Math.max(...dp));
