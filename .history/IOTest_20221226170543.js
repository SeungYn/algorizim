function* generatorFunction() {
  console.log('안녕하세요');
  yield 1;
  console.log('제너레이터 함수');
  yield 2;
  console.log('function*');
  yield 3;
  return 4;
}

const generator = generatorFunction();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

function* sumGenerator() {
  console.log('sumGenerator가 만들어졌습니다.');
  let a = yield;
  let b = yield;
  yield a + b;
}

const sum = sumGenerator();
console.log(sum.next());
console.log(sum.next());
console.log(sum.next());
