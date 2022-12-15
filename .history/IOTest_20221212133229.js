let range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ };
        } else {
          return { done: true };
        }
      },
    };
  },
};

let range2 = {
  from: 1,
  to: 5,

  *[Symbol.iterator]() {
    // [Symbol.iterator]: function*()를 짧게 줄임
    for (let value = this.from; value <= this.to; value++) {
      yield value;
    }
  },
};

console.log(...range2);
