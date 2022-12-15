function solution(k, m, score) {
  var answer = 0;

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

let solution2 = (_, m, s) => {
  console.log(s.length);
  console.log(s.sort().filter((_, i) => !((s.length - i) % m)));
  //.reduce((a, v) => a + v, 0) * m
};

solution2(4, 3, [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4]);
