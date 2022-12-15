function solution(arr) {
  var answer = [];
  let one = 0;
  let zero = 0;
  function helper(rowStart, colStart, n) {
    let middle = n / 2;
    if (middle > 0) {
      helper(rowStart, colStart);
      helper(rowStart, colStart + middle);
      helper(rowStart + middle, colStart);
      helper(rowStart + middle, colStart + middle);
    } else {
    }
  }
  return answer;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);

/**
 * 일단 중간 값을 구함
 * 그 다음 0보다 큰지 확인
 *  0보다 크면 4구역으로 나눔
 *    구역마다 0보다 큰지 확인 반복
 *      0보다 안 크면 해당 구역은 더 이상 나눠지지 않음
 *        그럼 해당 구역이 0인지 1인지 확인
 *          숫자를 셋 값을 리턴
 *
 */
let [a, b] = [2, 2];
[a, b] = [a + 3, b + 3];
console.log(a, b);
