const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [n, m, h] = input[0].split(' ').map(Number);

const peoplesBlocks = [];

for (let i = 1; i <= n; i++) {
  peoplesBlocks.push(input[i].split(' ').map(Number));
}

const dp = Array.from({ length: n + 1 }, () => [1, ...new Array(h).fill(0)]);

for (let i = 1; i <= n; i++) {
  for (let curB of peoplesBlocks[i - 1]) {
    for (let j = 0; j <= h; j++) {
      // 해당 블록으로 해당 높이를 세울때
      if (j - curB >= 0 && dp[i - 1][j - curB]) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - curB]) % 10007;
      }
      //if (dp[i][j] === 0) dp[i][j] = dp[i - 1][j];
    }
  }
  console.log(dp);
  for (let j = 1; j <= h; j++) {
    // 해당 블록으로 해당 높이를 세울때
    dp[i][j] = (dp[i][j] + dp[i - 1][j]) % 10007;
  }
}
console.log(dp);
console.log(dp[n][h]);
// const fs = require('fs');
// const input = fs
//   .readFileSync(
//     process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
//   )
//   .toString()
//   .trim()
//   .split('\n');

// /**
//  * 각 사람마다 i번째 높이의 블록을 만들수 있는 경우의수를 구함
//  */

// const [n, m, h] = input[0].split(' ').map(Number);
// let a = [];
// for (let i = 1; i < n + 1; i++) {
//   a.push(input[i].split(' ').map(Number));
// }
// let d = new Array(h + 1).fill(0);

// d[0] = 1;

// for (let i = 0; i < n; i++) {
//   const data = [];
//   for (let j = 0; j <= h; j++) {
//     for (let k = 0; k < a[i].length; k++) {
//       if (d[j] && j + a[i][k] <= h) {
//         data.push([j + a[i][k], d[j]]);
//       }
//     }
//   }
//   console.log(data);
//   console.log(d);
//   for (let [h, v] of data) {
//     d[h] = (d[h] + v) % 10007;
//   }
//   console.log(d);
// }
