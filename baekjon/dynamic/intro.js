// 창고털기
const n = 4;
const arr = [1, 3, 1, 5];

const dp = new Array(100).fill(0);

dp[0] = arr[0];
dp[1] = Math.max(arr[0], arr[1]);

for (let i = 2; i < n; i++) {
  dp[i] = Math.max(dp[i - 1], dp[i - 2] + arr[i]);
}

console.log(dp[n - 1]);

//1로 만들기

const x = 26;
const dp2 = new Array(100).fill(0);

for (let i = 2; i <= x; i++) {
  dp2[i] = dp2[i - 1] + 1;
  if (i % 2 === 0) dp2[i] = Math.min(dp2[i], dp2[i / 2] + 1);
  if (i % 3 === 0) dp2[i] = Math.min(dp2[i], dp2[i / 3] + 1);
  if (i % 5 === 0) dp2[i] = Math.min(dp2[i], dp2[i / 5] + 1);
}

console.log(dp2[x]);
