function areThereDuplicates(arr) {
  console.log(1);
  const obj = {};

  for (a in arr) {
    if (a in boj) {
      obj[a] += 1;
      if (obj[a] >= 2) {
        return true;
      }
    } else {
      obj[a] = 1;
    }
  }
  return false;
}

areThereDuplicates([1, 2, 3, 4, 5, 6]);
