function binarySearch(arr, tScore, start, end) {
  console.log(tScore, start, end);
  if (start > end) return start;
  const mid = parseInt((start + end) / 2);
  if (arr[mid] >= tScore) return binarySearch(arr, tScore, start, mid - 1);
  else return binarySearch(arr, tScore, mid + 1, end);
}

console.log(binarySearch([1, 2, 2, 2, 2], 2, 0, 4));
