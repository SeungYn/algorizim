function productOfArray(arr) {
  console.log(arr.slice(1));
  console.log(arr);
  let result = 1;
  function helper(arr) {
    if (arr.length === 0) return;

    result *= arr[0];
    arr = arr.slice(1);
    helper(arr);
  }
  helper(arr);
  console.log(result);
}

productOfArray([1, 2, 3, 10]);
