'use-strict';
function solution(msg) {
  var answer = [];
	const dict = new Map();
  for (let i = 1; i < 27; i++) {
    dict.set(String.fromCharCode(i + 64), i);
  }
  console.log(dict);
	const msgQueue = [...msg];
	while (msgQueue.length > 0) {
		const shift = msgQueue.shift();
		if(dict.has(shift))
	}

  return answer;
}

solution('KAKAO');
