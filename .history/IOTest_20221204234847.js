function solution(n, t, m, p) {
  var answer = '';

  let num = 0;
  let currentAnswerCount = 0;
  let order = 1;

  while (currentAnswerCount < t) {
    let nBase = num.toString(n);
    for (let i = 0; i < nBase.length; i++) {
      if (order === p) {
        answer += nBase[i];
        currentAnswerCount++;
      }
      order = nextOrder(order, m);
    }
    console.log(1);
    num++;
  }
  console.log(answer);
  return answer;
}
function nextOrder(n, m) {
  return ++n > m ? n % m : n;
}
solution(2, 4, 2, 1);
