'use-strict';

function solution(s) {
  var answer = -1;
  const a = [1, 2, 3];
  const arr = Array.from(s);
  console.log(arr);
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i !== 0) {
      const shift = arr.shift();

      arr.push(shift);
    }

    if (isRight([...arr])) {
      console.log('isRight');
      console.log(arr);
      count++;
    }
  }

  return count;
}

function isRight(temp) {
  const stack = [];
  const list = ['{', '[', '('];
  while (temp.length > 0) {
    const item = temp.shift();
    if (list.includes(item)) {
      stack.push(item);
    } else {
      if (stack.length === 0) return false;

      if ('[' === stack.slice(-1)[0] && item === ']') {
        stack.pop();
      } else if ('(' === stack.slice(-1)[0] && item === ')') {
        stack.pop();
      } else if ('{' === stack.slice(-1)[0] && item === '}') {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
}

function test() {
  const arr = [1, 2, 3, 4];
  test2(arr);
  console.log(arr);
}

function test2(temp) {
  temp.push(9);
}

test();
