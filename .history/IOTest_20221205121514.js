function solution(land) {
  var answer = 0;
  let index = -1;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');
  land.forEach((l) => {
    let max = 0,
      maxindex;
    for (let i = 0; i < 4; i++) {
      if (l[i] > max && index !== i && answer + l[i] <= 100) {
        max = l[i];
        maxindex = i;
      }
    }
    console.log(answer, max);
    if (answer + max > 100 || max === 0) return answer;
    answer += max;
    index = maxindex;
  });
  return answer;
}

console.log(
  solution([
    [92, 9, 8, 1],
    [9, 8, 6, 7],
    [8, 9, 7, 1],
    [1, 44, 4, 45],
  ])
);
