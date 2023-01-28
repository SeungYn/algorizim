function solution(x, y, n) {
  const dp = Array.from({ length: y + 1 }, () => Infinity);

  dp[x] = 0;
  dp[x + n] = 1;
  dp[x * 2] = 1;
  dp[x * 3] = 1;
  for (let i = x + 1; i <= y; i++) {
    if (i - n > x) {
      dp[i] = dp[i - n] + 1;
    }
    if (i % 2 === 0 && i / 2 >= x) {
      console.log(i, dp[i - n], dp[i / 2]);
      console.log(i - n);
      if (i - n > x) {
        dp[i] = Math.min(dp[i - n], dp[i / 2] + 1);
      } else {
        dp[i] = dp[i / 2] + 1;
      }
    }
    if (i % 3 === 0 && i / 3 >= x) {
      if (i - n > x) {
        dp[i] = Math.min(dp[i - n], dp[i / 3] + 1);
      } else {
        dp[i] = dp[i / 3] + 1;
      }
    }
  }
  console.log(dp);
  console.log(dp[y]);
  return dp[y];
}
solution(10, 40, 30);
// 10   15 20 30 40
// 0    1   1 1
// 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40
// 0   i  i  i  i  1 i  i  i  i   1
