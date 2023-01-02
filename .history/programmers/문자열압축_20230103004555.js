function solution(s) {
  var answer = Infinity;
  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    const line = '';
    let prev = s.slice(0, i);
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      const word = s.slice(j, j + i);
      if (prev === word) count++;
      else {
        line += count.toString() + prev;
        prev = word;
      }
    }
    answer = Math.min(answer, line.length);
  }
  return answer;
}

//solution('aabbaccc');
//a a b c d
const a = 'qwe';
console.log(a.slice(1, 4));
