function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];
  const a = '';
  function helper(currentWord, length) {
    if (length === 5) {
      return;
    }
    for (let i = 0; i < 5; i++) {
      currentWord += list[i];
      arr.push(currentWord);
      answer++;
      helper(arr, length++);
      currentWord.pop();
    }
  }
  helper('', 1);
  return answer;
}

solution('I');
