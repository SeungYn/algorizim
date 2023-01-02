function solution(s) {
  var answer = 0;
  for (let i = 1; i <= s.length; i++) {
    let nowIndex = 0;
    const stack = [];
    while (nowIndex < s.length) {
      const now = s.slice(nowIndex, nowIndex + i);
      //if(now )
    }
  }
  return answer;
}

//solution('aabbaccc');
//a a b c d
const a = [1, 2, 3];
console.log(a.slice(-1));
