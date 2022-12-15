function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];

  const arr = [];

  function helper(currentWord, length) {
    console.log(currentWord, length);
    if (length === 5) {
      return;
    }
    for (let i = 0; i < 5; i++) {
      currentWord.push(list[i]);
      arr.push(currentWord.join(''));
      answer++;
      helper(currentWord, ++length);
      currentWord.pop();
      length--;
    }
  }
  helper([], 0);
  console.log(arr);
  const q = arr.indexOf('word');
  console.log(q);
  return answer;
}

solution('I');
