function solution(n, t, m, p) {
  var answer = '';
  const arr = Array.from({ length: m * t }, (_, i) =>
    i.toString(n).toUpperCase()
  ).join('');

  for (let i = p - 1; i < arr.length; i += m) {
    if (answer.length === t) break;
    answer += arr[i];
  }

  return answer;
}
