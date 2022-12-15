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
      console.log(item);
      const deleteIndex = B.indexOf(item);
      B.splice(deleteIndex, 1);
      intersection++;
    }
  }
  union += B.length;
  console.log(A, B);
  console.log(intersection, union);
  if (A.length === 0 && B.length === 0) return 65536;

  return parseInt((intersection / union) * 65536);
}
//console.log(solution('FRANCE', 'french'));
//console.log(solution('E=M*C^2', 'e=m*c^2'));
// console.log(solution('di mi mi mi mi', 'di di di go'));
console.log(solution('aa1+aa2', 'aa'));

//교집합 구해줄때 조금 고생함 B가 aa 고 A가 aa aa이면 고치기전 교집합 크기가 2가 되게했음 교집합을 구하면 B에서 그 원소를 제거하는 방식으로 바꿈

console.log(new Set(['aa', 'aa', 'aa', 'bb', 'bb']));

function solution2(str1, str2) {
  function explode(text) {
    const result = [];
    for (let i = 0; i < text.length - 1; i++) {
      const node = text.substr(i, 2);
      if (node.match(/[A-Za-z]{2}/)) {
        result.push(node.toLowerCase());
      }
    }
    return result;
  }

  const arr1 = explode(str1);
  const arr2 = explode(str2);
  const set = new Set([...arr1, ...arr2]);
  console.log(set);
  let union = 0;
  let intersection = 0;

  set.forEach((item) => {
    const has1 = arr1.filter((x) => x === item).length;
    const has2 = arr2.filter((x) => x === item).length;
    union += Math.max(has1, has2);
    intersection += Math.min(has1, has2);
  });
  return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}
solution2('di mi mi mi mi', 'di di di go');

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2, 1);
console.log(arr);
