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
  const inputBox = [...order].sort((a, b) => a - b);
  const subBox = [];
  console.log(inputBox.slice(-1));
  var answer = 0;
  let checkIndex = 0;
  while (true) {
    const newBox = inputBox.shift();
    if (order[checkIndex] === newBox) {
      answer++;
      checkIndex++;
    } else {
      if (subBox.slice(-1)[0] === order[checkIndex]) {
      }
    }
    break;
  }
  return answer;
}

solution([4, 3, 1, 2, 5]);
