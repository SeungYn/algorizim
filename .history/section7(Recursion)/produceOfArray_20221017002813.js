function productOfArray(arr) {
  let result = 1;
  function helper(arr) {
    if (arr.length === 0) return;

    result *= arr[0];
    arr = arr.slice(1);
    helper(arr);
  }
  helper(arr);

  return result;
}

productOfArray([1, 2, 3, 10]);
