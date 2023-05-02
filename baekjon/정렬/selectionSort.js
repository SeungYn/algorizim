const arr = [3, 2, 5, 7, 6, 8];

for (let i = 0; i < arr.length; i++) {
  let minIndex = i;
  for (let j = i; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  const swap = arr[minIndex];
  arr[minIndex] = arr[i];
  arr[i] = swap;
}

console.log(arr);
