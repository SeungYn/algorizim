function solution(land) {
  const answer = 0;
  const dp = [0, 0, 0, 0];
  for (let i = 0; i < land.length - 1; i++) {
    dp[0] = Math.max(land[i] + dp[1], land[i] + dp[2], land[i] + dp[3]);
    dp[1] = Math.max(land[i] + dp[0], land[i] + dp[2], land[i] + dp[3]);
    dp[2] = Math.max(land[i] + dp[0], land[i] + dp[1], land[i] + dp[3]);
    dp[3] = Math.max(land[i] + dp[0], land[i] + dp[1], land[i] + dp[2]);
  }
  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
[
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];
