function averagePair(arr, target) {
  if (arr.length === 0) {
    return false;
  }

  const arrSum = arr.reduce((prev, curr) => prev + curr, 0);
  console.log(arrSum / arr.length);
}
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
