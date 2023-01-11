function makeCounter1() {
  let count = 0;

  return function () {
    return count++;
  };
}

const a = makeCounter1();
a();
a();
console.log(a());
