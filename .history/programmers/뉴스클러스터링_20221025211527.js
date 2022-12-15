'use-strict';

function solution(str1, str2) {
  var answer = 0;
  const A = [];
  const B = [];

  for (let i = 0; i < str1.length - 1; i++) {
    A.push(str1[i] + str1[i + 1]);
  }
  console.log(A);
  return answer;
}
console.log(solution('FRANCE', 'french'));
