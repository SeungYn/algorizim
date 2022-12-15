function solution(k, m, score) {
  var answer = 0;
  console.log(score.sort().reverse());
  let box = 0;
  let index = 0;
  while (index < score.length - m) {
    const arr = score.slice(index, index + m);
    let min = Math.min(...arr);
    index += m;
    answer += min * m;
  }
  console.log(answer);
  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
