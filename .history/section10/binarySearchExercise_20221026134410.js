function binarySearchExercise(arr, target) {
  function search(arr, start, end, target) {
    if (start > end) return -1;
    const mid = parseInt((start + end) / 2);

    if (arr[mid] > target) {
      return search(arr, start, mid - 1, target);
    } else if (arr[mid] < target) {
      return search(arr, mid + 1, end, target);
    } else {
      return arr[mid];
    }
  }
}
