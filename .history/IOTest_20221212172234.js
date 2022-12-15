function solution(k, m, score) {
  var answer = 0;
  const sortedScore = score
    .slice()
    .sort((a, b) => a - b)
    .slice(score.length % m);
  console.log(sortedScore);
  score.sort().reverse();
  let index = 0;
  while (index < score.length - m + 1) {
    const arr = score.slice(index, index + m);
    let min = Math.min(...arr);
    index += m;
    answer += min * m;
  }
  return answer;
}

solution(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]);
