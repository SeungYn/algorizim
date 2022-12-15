'use-strict';
var pattern1 = /[0-9]/; //숫자
var pattern2 = /^[a-zA-Z]*$/; //영어
var pattern3 = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //한글
var pattern4 = /[~!@#\#$%<>^&*]/; //특수문자
function solution(str1, str2) {
  var answer = 0;
  var pattern2 = /^[a-zA-Z]*$/;
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const A = [];
  const B = [];

  let intersection = 0;
  let union = 0;

  for (let i = 0; i < str1.length - 1; i++) {
    const char = str1[i] + str1[i + 1];
    if (pattern2.test(char)) {
      A.push(char);
    }
  }
  union += A.length;
  for (let i = 0; i < str2.length - 1; i++) {
    const char = str2[i] + str2[i + 1];
    if (pattern2.test(char)) {
      B.push(char);
    }
  }
  //union += B.length;

  for (item of A) {
    if (B.includes(item)) {
      intersection++;
    }
  }
  union += B.length - intersection;
  console.log(A, B);
  console.log(intersection, union);
  if (A.length === 0 && B.length === 0) return 65536;

  return parseInt((intersection / union) * 65536);
}
//console.log(solution('FRANCE', 'french'));
//console.log(solution('E=M*C^2', 'e=m*c^2'));
// console.log(solution('di mi mi mi mi', 'di di di go'));
console.log(solution('12444', '4456788'));
console.log(0 / 0);
