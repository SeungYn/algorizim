let range = {
  from: 1,
  to: 5,

  // for await..of 최초 실행 시, Symbol.asyncIterator가 호출됩니다.
  [Symbol.asyncIterator]() {
    // (1)
    // Symbol.asyncIterator 메서드는 이터레이터 객체를 반환합니다.
    // 이후 for await..of는 반환된 이터레이터 객체만을 대상으로 동작하는데,
    // 다음 값은 next()에서 정해집니다.
    return {
      current: this.from,
      last: this.to,

      // for await..of 반복문에 의해 각 이터레이션마다 next()가 호출됩니다.
      async next() {
        // (2)
        //  next()는 객체 형태의 값, {done:.., value :...}를 반환합니다.
        // (객체는 async에 의해 자동으로 프라미스로 감싸집니다.)

        // 비동기로 무언가를 하기 위해 await를 사용할 수 있습니다.
        await new Promise((resolve) =>
          setTimeout(() => resolve(console.log('test')), 1000)
        ); // (3)

        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

(async () => {
  for await (let value of range) {
    // (4)
    console.log(value); // 1,2,3,4,5
  }
})();
