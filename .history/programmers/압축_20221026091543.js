'use-strict';
function solution(msg) {
  var answer = [];
  const dict = new Map();
  for (let i = 1; i < 27; i++) {
    dict.set(String.fromCharCode(i + 64), i);
  }
  let lastIndex = 27;
  const msgQueue = [...msg];
  let m = '';
  let index = 0;
  let subIndex = index + 1;
  while (index <= meg.length) {
    m += msgQueue.shift();

    if (dict.has(m)) {
      console.log(m);
      answer.push(dict.get(m));
      continue;
    } else {
      dict.set(m, lastIndex++);
      m = '';
    }
  }
  console.log(msgQueue);
  console.log(dict);
  console.log(answer);
  return answer;
}

solution('KAKAO');
