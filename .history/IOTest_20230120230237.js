function test(x, y) {
  console.log(arguments);
  return x * y;
}

console.log(test.hasOwnProperty('prototype'));
