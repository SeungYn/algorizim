function solution(land) {
  var answer = 0;
  let index = -1;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');
  land.forEach((l) => {
    let max = 0,
      maxindex;
    for (let i = 0; i < 4; i++) {
      if (l[i] > max && index !== i) {
        max = l[i];
        maxindex = i;
      }
    }
    console.log(answer, max);
    answer += max;

    index = maxindex;
  });
  return answer;
}

console.log(
  solution([
    [9, 5, 2, 3],
    [9, 8, 6, 7],
    [8, 9, 7, 1],
    [9, 100, 8, 1],
  ])
);
