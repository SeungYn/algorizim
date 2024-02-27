function solution(new_id) {
  var answer = new_id;

  // 1
  answer = answer.toLowerCase();
  // 2
  answer = answer.replace(/[^a-z0-9\_\-\.]/g, '');
  // 3
  answer = answer.replace(/[.]+/g, '.');
  //4
  answer = answer.replace(/^\./g, '');
  answer = answer.replace(/\.$/g, '');
  //5
  answer = answer.length === 0 ? 'a' : answer;
  //6
  answer =
    answer.length >= 16 ? answer.slice(0, 15).replace(/\.$/g, '') : answer;

  //7
  answer =
    answer.length <= 2 ? answer.padEnd(3, answer[answer.length - 1]) : answer;
  console.log(answer);

  return answer;
}
