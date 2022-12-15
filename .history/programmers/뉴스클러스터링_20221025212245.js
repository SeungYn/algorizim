'use-strict';
var pattern1 = /[0-9]/; //숫자
var pattern2 = /^[a-zA-Z]*$/; //영어
var pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
var pattern4 = /[~!@#\#$%<>^&*]/; //특수문자
function solution(str1, str2) {
  var answer = 0;
  const A = [];
  const B = [];

  for (let i = 0; i < str1.length - 1; i++) {
    console.log(pattern2.test(str1[i] + str1[i + 1]));
  }
  console.log(A);
  return answer;
}
console.log(solution('FRANCE', 'french'));
console.log(pattern2.test('c1'));
