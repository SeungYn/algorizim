function solution(land) {
  var answer = 0;
  let index = -1;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');
  land.forEach((l) => {
    let max, maxIndex;
    while (true) {
      max = Math.max(...l);

      maxIndex = l.indexOf(max);
      if (maxIndex !== index) break;
      console.log(l, max);
      l.splice(maxIndex, 1);
    }
    console.log(max);
    index = maxIndex;
    if (answer + max > 100) return answer;
    answer += max;
  });
  return answer;
}

console.log(
  solution([
    [9, 5, 2, 3],
    [9, 8, 6, 7],
    [8, 9, 7, 1],
    [100, 9, 8, 1],
  ])
);
