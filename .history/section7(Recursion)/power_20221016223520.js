function power(a, b) {
  let result = 1;

  function helper(a, b) {
    if (b === 0) return (result = 1);

    if (b === 1) {
      result *= a;
      return;
    }
    result *= a;
    b--;
    helper(a, b);
  }
  helper(a, b);
  console.log(result);
}

power(2, 1);
