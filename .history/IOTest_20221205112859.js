function solution(land) {
  var answer = 0;
  let index = -1;
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');
  land.forEach((l) => {
    let max, maxIndex;
    while (true) {
      max = Math.max(...l);

      maxIndex = l.findIndex(max);
      if (maxIndex !== index) break;
      l.splice(maxIndex, 1);
    }

    answer += max;
  });
  return answer;
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
);
