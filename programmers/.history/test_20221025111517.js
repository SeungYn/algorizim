'use-strict';
console.log(1);
function solution(s) {
  var answer = -1;
  const a = [1, 2, 3];
  const arr = Array.from(s);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      const shift = arr.shift();
      arr.push(shift);
    }
    if (isRight(arr)) {
      count++;
    }
  }

  return count;
}

function isRight(arr) {
  const stack = [];
  const list = ['{', '[', '('];
  while (arr.length > 0) {
    console.log(stack);
    const item = arr.shift();
    if (list.includes(item)) {
      console.log(stack);
      stack.push(item);
    } else {
      if (arr.length === 0) return false;
      if ('[' === stack.slice(-1) && item === ']') {
        console.log('123');
        stack.pop();
      } else if ('(' === stack.slice(-1) && item === ')') {
        stack.pop();
      } else if ('{' === stack.slice(-1) && item === '}') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
}

console.log(isRight(Array.from('[](){}')));
