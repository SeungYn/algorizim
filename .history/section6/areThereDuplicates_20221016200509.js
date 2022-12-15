function areThereDuplicates(arr) {
  console.log(1);
  const obj = {};

  for (a in arr) {
    console.log(a in obj);
  }
}

areThereDuplicates([1, 2, 3, 4, 5, 6]);
