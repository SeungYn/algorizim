function solution(land) {
  var answer = 0;
  let index = -1;

  land.some((l) => {
    let max = 0,
      maxindex;
    for (let i = 0; i < 4; i++) {
      if (l[i] > max && index !== i && answer + l[i] <= 100) {
        max = l[i];
        maxindex = i;
      }
    }
    console.log(answer, max);

    if (max === 0) {
      return answer;
    }

    answer += max;
    index = maxindex;
  });
  return answer;
}

console.log(
  solution([
    [4, 3, 2, 1],
    [5, 6, 7, 8],
    [1, 2, 3, 5],
  ])
);
