function solution(land) {
  const answer = 0;
  const dp = [0, 0, 0, 0];
  console.log(dp);
  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      dp[i] = Math.max(dp[i] + land[i - 1][j]);
    }
  }
  return dp;
}
console.log(0 / 0);
console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 2, 1],
    [6, 6, 6, 4],
    [8, 7, 6, 5],
  ])
);
[
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];
