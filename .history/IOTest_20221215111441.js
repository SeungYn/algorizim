'use strict';
let worker = {
  someMethod() {
    return 1;
  },

  slow(x) {
    // CPU 집약적인 작업이라 가정
    console.log(`slow(${x})을/를 호출함`);
    return x * this.someMethod(); // (*)
  },
};

// 이전과 동일한 코드
function cachingDecorator(func) {
  let cache = new Map();

  return function (x) {
    if (cache.has(x)) {
      return cache.get(x);
    }

    let result = func.call(this, x); // (**)
    cache.set(x, result);
    return result;
  };
}

console.log(worker.slow(1)); // 기존 메서드는 잘 동작합니다.

worker.slow = cachingDecorator(worker.slow); // 캐싱 데코레이터 적용

console.log(worker.slow(2));
