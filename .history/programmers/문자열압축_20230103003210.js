function solution(s) {
  var answer = 0;
  for (let i = 1; i <= s.length; i++) {
    let nowIndex = 0;
    const stack = {};
    for (let j = i; j <= s.length; j += i) {
      const front = s.slice(j - i, j);
      let back;
      if (j + i < s.length) back = s.slice(j, j + i);
      else back = s.slice(j);
    }
  }
  return answer;
}

//solution('aabbaccc');
//a a b c d
const a = 'qwe';
console.log(a.slice(1));
