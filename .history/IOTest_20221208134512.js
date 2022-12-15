function sayHi() {
  console.log('Hi');

  // 함수를 몇 번 호출했는지 세봅시다.

  sayHi.counter++;
}

sayHi.counter = 0;
console.log(sayHi());
