function solution(s) {
  var answer = 0;
  for (let i = 1; i <= s.length; i++) {
    let prev = s.slice(0, i);
    let count = 1;
    for (let j = i; j <= s.length; j += i) {
      const front = s.slice(j, j + i);
      let back;
      if (j + i < s.length) back = s.slice(j, j + i);
      else back = s.slice(j);

      if (front === back) s;
    }
  }
  return answer;
}

//solution('aabbaccc');
//a a b c d
const a = 'qwe';
console.log(a.slice(1, 4));
