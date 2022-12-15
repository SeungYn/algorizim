'use-strict';

function solution(n, left, right) {
  var answer = [];
  for (let i = 1; i < n + 1; i++) {
    const arr = Array.from({ length: n }, () => 0);
    console.log(arr);
  }
  return answer;
}

console.log(solution(3, 2, 5));
console.log([3] * 3);
const arr = [];
console.log(arr.fill(4, 0, 3));

console.log(arr);
