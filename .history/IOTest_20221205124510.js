function solution(land) {
  var answer = 0;
  let index = -1;
  let max = Math.max(...land[0]);
  let prevIndex = land[0].indexOf(max);

  for (let i = 1; i < land.length - 1; i++) {
    let localMax = -1;
    let index = -1;
    for (let j = 0; j < 4; j++) {
      if (land[i][j] + max <= 100 && j !== prevIndex && localMax < land[i][j]) {
        localMax = land[i][j];
        index = j;
      }
    }
    max += localMax;
    prevIndex = index;
  }

  return max;
}

console.log(
  solution([
    [4, 3, 2, 1],
    [2, 2, 1, 1],
    [6, 6, 6, 4],
    [5, 9, 9, 9],
  ])
);
[
  [4, 3, 2, 1],
  [2, 2, 2, 1],
  [6, 6, 6, 4],
  [8, 7, 6, 5],
];
