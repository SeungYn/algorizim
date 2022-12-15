function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  arr.reduce((prev, curr) => console.log(prev, curr), 0);
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
