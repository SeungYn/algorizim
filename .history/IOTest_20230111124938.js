function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

function makeCount2() {
  function counter() {
    return counter.count++;
  }
  counter.count = 0;
  return counter;
}

const a = makeCounter1();
a();
a();
console.log(a());

const b = makeCount2();

b();
b();
console.log(b());
