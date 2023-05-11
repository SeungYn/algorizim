const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

let t = +input[0];

const dp = Array.from({ length: 41 }, () => [0, 0]);
dp[0][0] = 1;
dp[1][1] = 1;
dp[2][0] = 1;
dp[2][1] = 1;

for (let i = 3; i < 41; i++) {
  dp[i] = [dp[i - 2][0] + dp[i - 1][0], dp[i - 2][1] + dp[i - 1][1]];
}

let index = 1;

while (index <= t) {
  const n = +input[index];
  const [zeroCnt, oneCnt] = dp[n];
  console.log(zeroCnt, oneCnt);
  index++;
}

let zero = 0;
let one = 0;
function fibonacci(n) {
  if (n == 0) {
    zero++;
    return 0;
  } else if (n == 1) {
    one++;
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

let n = 9;
console.log(n, fibonacci(n), zero, one);
