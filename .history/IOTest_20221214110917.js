function test(s, d, f, ...a) {
  console.log(a);
  console.log(arguments);
}

test(1, 2, 3, 4, 4, 5, 6, 45, 5);

const arrow = (a, b, c) => {
  console.log(arguments);
};

arrow(1, 2);
