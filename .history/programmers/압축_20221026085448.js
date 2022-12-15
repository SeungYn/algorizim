'use-strict';
function solution(msg) {
  var answer = [];
  const dict = {};
  for (let i = 1; i < 27; i++) {
    dict[i] = String.fromCharCode(i + 64);
  }
  console.log(new Map(dict));
  const msgQueue = msg;

  return answer;
}

solution('KAKAO');
