function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(partialSum, maxSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
