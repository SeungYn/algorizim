function binarySearchExercise(arr, target) {
  function search(arr, start, end, target) {
    if (start > end) return -1;
    const mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      return search(arr, start, mid - 1, target);
    } else if (arr[mid] < target) {
      return search(arr, mid + 1, end, target);
    } else {
      return mid;
    }
  }
  return search(arr, 0, arr.length - 1, target);
}

console.log(
  binarySearchExercise(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )
);
