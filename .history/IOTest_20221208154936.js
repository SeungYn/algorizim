const util = require('util');
console.log(util.inspect(Array, { maxArrayLength: null }));

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
      arr.push(currentWord.join(''));
      answer++;
      helper(currentWord, ++length);
      currentWord.pop();
      length--;
    }
  }
  helper([], 0);
  const q = arr.indexOf(word);
  return q + 1;
}

solution('I');
const f = (a) =>
  ['A', 'E', 'I', 'O', 'U', ''].map((b) => {
    return a + b;
  });
console.log(
  Array.from(
    new Set(
      ['A', 'E', 'I', 'O', 'U', '']
        .map(f)
        .flat()
        .map(f)
        .flat()
        .map(f)
        .flat()
        .map(f)
        .flat()
    )
  )
    .sort()
    .indexOf('I')
);

console.log(['A', 'E', 'I', 'O', 'U', ''].map(f).flat().map(f).flat());
