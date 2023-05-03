const arr = [3, 2, 5, 7, 6, 8];

for (let i = arr.length - 1; i >= 0; i--) {
  for (let j = 1; j <= i; j++) {
    if (arr[j - 1] > arr[j]) {
      const swap = arr[j - 1];
      arr[j - 1] = arr[j];
      arr[j] = swap;
    }
  }
}

console.log(arr);
