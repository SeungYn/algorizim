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

  while (index <= msg.length) {
    m = msgQueue.slice(index, subIndex).join('');

    console.log(index, m);

    if (dict.has(m)) {
      subIndex++;
      continue;
    } else {
      console.log('msg', msgQueue.slice(index, subIndex).join(''));
      answer.push(dict.get(msgQueue.slice(index, subIndex - 1).join('')));
      dict.set(m, lastIndex++);
      if (subIndex >= msg.length) break;
      index++;
      subIndex = index + 1;

      m = '';
    }
  }
  console.log(msgQueue);
  console.log(dict);
  console.log(answer);
  return answer;
}

solution('KAKAO');

console.log(['K', 'A', 'K', 'A', 'O'].slice(1, 2));
