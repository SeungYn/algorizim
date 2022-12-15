function solution(word) {
  var answer = 0;
  const list = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];

  function helper(arr, length) {
    if (length === 5) {
      if (word) return;
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
console.log([1, 2, 3][1];)
