function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];
  const a = '';
  function helper(arr, length) {
    if (length === 5) {
      return;
    }
    for (let i = 0; i < 5; i++) {
      arr.push(list[i]);
      answer++;
      helper(arr, length++);
    }
  }
  helper(arr, 1);
  return answer;
}

solution('I');
