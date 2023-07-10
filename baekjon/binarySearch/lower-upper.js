function lowerBound(arr, start, end, target) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] >= target) end = mid;
    else start = mid + 1;
  }
  return end;
}

function upperBound(arr, start, end, target) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else start = mid + 1;
  }
  return end;
}

console.log(upperBound([1, 2, 2, 2, 2], 0, 5, 2));
