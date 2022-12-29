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

let carriedSum = _.curry(sum); // lodash 라이브러리의 _.carry 사용

console.log(carriedSum(1, 2)); // 3, 보통 때 처럼 호출가능
console.log(carriedSum(1)(2)); // 3, partially 호출되었음
