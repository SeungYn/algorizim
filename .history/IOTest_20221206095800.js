function solution(land) {
  const answer = 0;
  const dp = [0, 0, 0, 0];
  console.log(dp);
  for (let i = 1; i < land.length + 1; i++) {
    dp[0] = Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]) + dp[0];
    dp[1] = Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]) + dp[1];
    dp[2] = Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]) + dp[2];
    dp[3] = Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]) + dp[3];
  }
  return dp;
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
