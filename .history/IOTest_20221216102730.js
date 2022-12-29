let numbers = [];

numbers = new Proxy(numbers, {
  // (*)
  set(target, prop, val) {
    // 프로퍼티에 값을 쓰는 동작을 가로챕니다.
    if (typeof val == 'number') {
      target[prop] = val;
      return true;
    } else {
      return false;
    }
  },
});

numbers.push(1); // 추가가 성공했습니다.
numbers.push(2); // 추가가 성공했습니다.
console.log('Length is: ' + numbers.length); // 2

numbers.push('test'); // Error: 'set' on proxy

console.log('윗줄에서 에러가 발생했기 때문에 이 줄은 절대 실행되지 않습니다.');
