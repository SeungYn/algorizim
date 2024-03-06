function solution(p) {
  var answer = '';
  answer = dfs(p);
  return answer;
}

function dfs(str) {
  if (str === '') return '';

  let answer = '';
  let [u, v] = separateStr(str);

  v = dfs(v);
  if (correctStr(u)) return u + v;

  answer = '(';
  answer += v;
  answer += ')';

  for (let i = 1; i < u.length - 1; i++) {
    if (u[i] === '(') answer += ')';
    else answer += '(';
  }

  return answer;
}

function separateStr(str) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count++;
    else count--;

    if (count === 0) {
      index = i;
      break;
    }
  }

  return [str.slice(0, index + 1), str.slice(index + 1)];
}

function correctStr(str) {
  let count = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count++;
    else count--;

    if (count < 0) return false;
  }

  return true;
}
