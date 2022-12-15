function solution(s) {
  var answer = 0;
  answer = helper(s, 0);
  return answer;
}

function helper(str, answer) {
  if (str === '') return answer;
  if (str.length === 1) return ++answer;
  console.log(str, answer);
  let xCnt = 1;
  let otherCnt = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[0] === str[i]) xCnt++;
    else if (str[i] !== str[0]) otherCnt++;

    if (xCnt === otherCnt) return helper(str.slice(i + 1), ++answer);
  }
}

console.log(solution('abracadabra'));
