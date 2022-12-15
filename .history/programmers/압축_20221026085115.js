'use-strict';
function solution(msg) {
  var answer = [];
  const dict = {};
  for (let i = 1; i < 27; i++) {
    dict[i] = String.fromCharCode(i + 64);
  }

  console.log(dict);
  return answer;
}

solution('KAKAO');
