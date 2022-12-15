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
    const shift = msgQueue.shift();

    if (dict.has(shift)) {
      console.log(1);
      m += shift;
      continue;
    } else {
      dict.set(m, lastIndex++);
      m = '';
    }
  }
  console.log(dict);

  return answer;
}

solution('KAKAO');
