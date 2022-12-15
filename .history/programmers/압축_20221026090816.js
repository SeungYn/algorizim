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
  console.log(msgQueue);
  while (msgQueue.length > 0) {
    m += msgQueue.shift();

    if (dict.has(m)) {
      continue;
    } else {
      dict.set(m, lastIndex++);
      m = '';
    }
  }
  console.log(msgQueue);
  console.log(dict);

  return answer;
}

solution('KAKAO');
