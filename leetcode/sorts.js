const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // const temp = arr[j];
        // arr[j] = arr[j + 1];
        // arr[j + 1] = temp;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log('bubblesort::: ', bubbleSort([...arr]));

// pivot를 하나를 정하고 pivot를 기준으로 왼쪽은 작은값 오른쪽은 큰 값
function partition(a, lo, hi) {
  const pivot = a[hi];
  let left = lo;

  for (let right = lo; right < hi; right++) {
    if (a[right] < pivot) {
      const temp = a[left];
      a[left] = a[right];
      a[right] = temp;
      left++;
    }
  }

  const temp = a[left];
  a[left] = a[hi];
  a[hi] = temp;
  return left;
}

function quickSort(a, lo, hi) {
  if (lo < hi) {
    const pivot = partition(a, lo, hi);
    quickSort(a, lo, pivot - 1);
    quickSort(a, pivot + 1, hi);
  }

  return a;
}

console.log('quicksort::: ', quickSort([...arr], 0, arr.length - 1));
