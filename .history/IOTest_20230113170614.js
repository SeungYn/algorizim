function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function sayHi(who) {
  console.log('안녕, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred('철수'); // 2초 후 "안녕, 철수"가 출력됩니다.
