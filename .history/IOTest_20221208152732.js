function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];

  const arr = [];

  function helper(currentWord, length) {
    if (length === 5) {
      return;
    }
    for (let i = 0; i < 5; i++) {
      currentWord.push(list[i]);
      console.log(currentWord);
      arr.push(currentWord);
      answer++;
      helper(currentWord, length++);
      currentWord.pop();
    }
  }
  helper([], 0);
  return answer;
}

solution('I');
