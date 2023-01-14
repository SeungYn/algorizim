function sum(a, b) {
  return a + b;
}

const twoPlus = sum.bind(null, 2);
console.log(twoPlus(4));
