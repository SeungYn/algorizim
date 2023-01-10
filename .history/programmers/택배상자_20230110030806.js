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
        if (newBox !== undefined) subBox.push(newBox);
        answer++;
        checkIndex++;
      } else {
        if (inputBox.length === 0) break;
        subBox.push(sub);
        subBox.push(newBox);
      }
    }
  }

  console.log(answer);
  return answer;
}

solution([5, 4, 3, 2, 1]);
