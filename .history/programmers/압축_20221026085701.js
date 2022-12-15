'use-strict';
function solution(msg) {
  var answer = [];
  const dict = new Map();
  for (let i = 1; i < 27; i++) {
    dict.set(i, String.fromCharCode(i + 64));
  }
  console.log(dict);
  const msgQueue = msg;

  return answer;
}

solution('KAKAO');
