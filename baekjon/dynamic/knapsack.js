const p = [0, 7, 10, 6, 7, 5, 4];
const w = [0, 4, 2, 6, 4, 2, 10];
const n = p.length;
const c = 10;
const dp = Array.from({ length: n + 1 }, () => new Array(c + 1).fill(0));

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= c; j++) {
    if (w[i] <= j) {
      console.log(dp[i - 1][j - w[i]] + p[i], dp[i - 1][j]);
      dp[i][j] = Math.max(dp[i - 1][j - w[i]] + p[i], dp[i - 1][j]);
    } else {
      dp[i][j] = dp[i - 1][j];
    }
  }
  dp.forEach((i) => console.log(i.join(' ')));
  console.log('---');
}

dp.forEach((i) => console.log(i.join(' ')));
