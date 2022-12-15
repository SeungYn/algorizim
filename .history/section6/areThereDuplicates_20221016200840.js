function areThereDuplicates(arr) {
  console.log(1);
  const obj = {};

  for (a of arr) {
    if (a in obj) {
      obj[a] += 1;
      if (obj[a] >= 2) {
        return true;
      }
    } else {
      obj[a] = 1;
    }
  }
  console.log(obj);
  return false;
}

console.log(areThereDuplicates([1, 2, 3, 4, 5, 5]));
