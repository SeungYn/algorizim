console.log(123);
/**
 * 컨테이너에서 하나가 들어오면 기사님 순서와 비교
 * 	맞으면
 * 		answer+=1
 * 	틀리면
 * 		보조박스 검사
 * 			있으면 answer += 1
 * 			없으면
 * 				보조박스에 넣음
 */

function solution(order) {
  const inputBox = Array.from(
    { length: order.length },
    (v, i) => order.length - i
  );
  let answer = 0;
  const subBox = [];
  let checkIndex = 0;
  while (checkIndex < order.length) {
    const newBox = inputBox.pop();

    if (newBox === order[checkIndex]) {
      answer++;
      checkIndex++;
    } else {
      const sub = subBox.pop();
      if (sub === order[checkIndex]) {
        if (newBox !== undefined) inputBox.push(newBox);
        answer++;
        checkIndex++;
      } else {
        if (inputBox.length === 0) break;
        if (sub !== undefined) subBox.push(sub);
        if (newBox !== undefined) subBox.push(newBox);
      }
    }
  }

  console.log(answer);
  return answer;
}

solution([2, 1, 6, 7, 5, 8, 4, 9, 3, 10]);
[2, 1, 6, 7, 5, 8, 4, 9, 3, 10][(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)];
