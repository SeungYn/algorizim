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
generator.next();
generator.next();
generator.next();
generator.next();
