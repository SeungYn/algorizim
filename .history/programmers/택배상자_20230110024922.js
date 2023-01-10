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
  const inputBox = Array.from({ length: order.length }, (v, i) => i + 1);
  let answer = 0;
  const subBox = [];

  return answer;
}

solution([5, 4, 3, 2, 1]);
