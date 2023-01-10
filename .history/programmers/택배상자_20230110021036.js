console.log(123);
/**
 *
 */

function solution(order) {
  const inputBox = [...order].sort((a, b) => a - b);
  console.log(inputBox.slice(-1));
  var answer = 0;
  return answer;
}

solution([4, 3, 1, 2, 5]);
