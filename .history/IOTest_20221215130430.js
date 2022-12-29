'use strict';

function solution(k, score) {
  var temp = [];
  let answer = [];

  score.forEach((el) => {
    temp.push(el);
    temp.sort((a, b) => b - a);
    if (k < temp.length) answer.push(temp[k - 1]);
    else answer.push(temp[temp.length - 1]);
    console.log(temp, answer);
  });
  return answer;
}
console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
