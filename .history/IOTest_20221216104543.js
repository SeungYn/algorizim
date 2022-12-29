function curry(f) {
  // 커링 변환을 하는 curry(f) 함수
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

function sum(a, b) {
  return a + b;
}

let log2 = curry(log);

log2(new Date(), 'DEBUG', 'some debug');
