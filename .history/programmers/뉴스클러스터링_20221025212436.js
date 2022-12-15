'use-strict';
var pattern1 = /[0-9]/; //숫자
var pattern2 = /^[a-zA-Z]*$/; //영어
var pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
var pattern4 = /[~!@#\#$%<>^&*]/; //특수문자
function solution(str1, str2) {
  var answer = 0;
  const A = [];
  const B = [];

  for (let i = 0; i < str1.lowerCase().length - 1; i++) {
    const char = str1[i] + str1[i + 1];
    if (pattern2.test(char)) {
      A.push(char);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const char = str2[i] + str2[i + 1];
    if (pattern2.test(char)) {
      B.push(char);
    }
  }
  console.log(A);
  console.log(B);
  return answer;
}
console.log(solution('FRANCE', 'french'));
