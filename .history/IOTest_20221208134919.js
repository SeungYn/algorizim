function makeCounter() {
  // let count = 0 대신 아래 메서드(프로퍼티)를 사용함

  function counter() {
    this.count = 0;
    return counter.count++;
  }

  return counter;
}

let counter = makeCounter();
console.log(counter);
console.log(counter()); // 0
console.log(counter()); // 1
