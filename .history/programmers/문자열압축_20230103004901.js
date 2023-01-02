function solution(s) {
  var answer = Infinity;
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let line = '';
    let prev = s.slice(0, i);
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      const word = s.slice(j, j + i);
      if (prev === word) count++;
      else {
        line += (count === 1 ? '' : count.toString()) + prev;
        prev = word;
        count = 1;
      }
    }
    console.log(line);
    answer = Math.min(answer, line.length);
  }
  console.log(answer);
  return answer;
}

solution('aabbaccc');
