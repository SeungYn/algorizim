'use-strict';
function solution(msg) {
  const answer = [];
  let nextWord = '';
  let lastCount = 27;
  const dir = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  const s = msg.split('').reduce((acc, cur) => {
    nextWord = acc + cur;
    if (dir[nextWord] === undefined) {
      dir[nextWord] = lastCount++;
    } else {
      return acc + cur;
    }
    if (dir[acc] !== undefined) answer.push(dir[acc]);
    return cur;
  });

  answer.push(dir[s]);

  return answer;
}

solution('KAKAO');

console.log(['K', 'A', 'K', 'A', 'O'].slice(1, 2));

// if (dict.has(m)) {
// 	subIndex++;
// 	//사전에 다음 인덱스까지의 문자열이 존재하지 않으면
// 	if (!dict.has(msgQueue.slice(index, subIndex).join(''))) {
// 		answer.push(dict.get(m));
// 	} else {
// 		//존재하면

// 	}
// 	continue;
// } else {
// 	dict.set(m, lastIndex++);

// 	if (subIndex >= msg.length) break;
// 	index++;
// 	subIndex = index + 1;

// 	m = '';
// }
// }
//
console.log(['3', '2'].slice(0, 4).join(''));
