function binarySearch(arr, start, end, target) {
  if (start > end) return -1;

  const mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return 1;
  else if (arr[mid] > target) return binarySearch(arr, start, end - 1, target);
  else return binarySearch(arr, start + 1, end, target);
}

let n = 10;
let target = 7;
const arr = [1, 3, 5, 7, 11, 13, 15, 17, 19];

console.log(binarySearch(arr, 0, n - 1, target));
module.exports = binarySearch;
