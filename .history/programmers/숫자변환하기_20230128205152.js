function solution(x, y, n) {
  var answer = 0;
  const dp = Array.from({ length: y + 1 }, () => Infinity);
  let now = x;

  dp[x] = 0;
  dp[x + n] = 1;
  dp[x * 2] = 1;
  dp[x * 3] = 1;
  for (let i = x + 1; i <= y; i++) {
    if (i - n > x) {
      dp[i] = dp[i - n] + 1;
    }
    if (i % 2 === 0 && i / 2 > x) {
      console.log(dp[i], dp[i % 2] + 1, '---');
      dp[i] = Math.min(dp[i], dp[i % 2] + 1);
    }
    if (i % 3 === 0 && i / 3 > x) {
      console.log(dp[i], dp[i % 3] + 1);
      dp[i] = Math.min(dp[i], dp[i % 3] + 1);
    }
  }

  return answer;
}
solution(10, 40, 5);
// 10   15 20 30 40
// 0    1   1 1
