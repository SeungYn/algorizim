function partial(func, ...argsBound) {
  return function (...args) {
    return func.call(this, ...argsBound, ...args);
  };
}

// 사용법:
let user = {
  firstName: 'John',
  say(time, phrase) {
    console.log(`[${time}] ${this.firstName}: ${phrase}!`);
  },
};
