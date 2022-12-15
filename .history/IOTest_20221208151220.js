function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];
  const a = '';
  function helper(arr, length) {
    if (length === 5) {
      if (word === arr[arr.length - 1]) a = true;
      return;
    }
    for (let i = 0; i < 5; i++) {
      arr.push(list[i]);
      answer++;
      helper(arr, length++);
    }
  }
  return answer;
}

//solution('I');
