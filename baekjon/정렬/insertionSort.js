const arr = [3, 2, 5, 7, 6, 8];

console.log(arr);

for (let i = 1; i < arr.length; i++) {
  for (let j = i; j > 0; j--) {
    if (arr[j - 1] > arr[j]) {
      const swap = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = swap;
    }
  }
}

console.log(arr);
