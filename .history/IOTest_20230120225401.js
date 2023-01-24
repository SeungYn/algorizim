function test(x, y) {
  console.log(arguments);
  return x * y;
}

test(1);
test(1, 2);
test(1, 2, 3);
test(1, 2, 3, 4);
