function solution(x, y, n) {
  var answer = 0;
  const dp = Array.from({ length: y + 1 }, () => Infinity);
  let now = x;

  dp[x] = 0;
  while (now < y) {
    let next = now + n;
    dp[next] = dp[now] + 1;
    if (now * 2 <= y) {
      next = now * 2;
      dp[next] = dp[now] + 1;
    }
    if (now * 2 <= y) {
      next = now * 3;
      dp[next] = dp[now] + 1;
    }
    now = next;
  }
  console.log(dp);

  return answer;
}
solution(10, 40, 5);
