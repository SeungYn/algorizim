'use-strict';

function solution(n, left, right) {
  var answer = [];
  for (let i = 1; i < n + 1; i++) {
    const arr = Array.from({ length: n }, () => 0);
    arr.fill(i, 0, i);
    for (let j = i; j < n; j++) {
      console.log(j + 1);
    }
    console.log(123);
    answer.push(arr);
  }
  return answer;
}

console.log(solution(3, 2, 5));
