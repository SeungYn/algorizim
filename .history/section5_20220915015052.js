//빈도수 세기 2n
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

validAnagram = (a, b) => {
  if (a.length !== a.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of a) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of b) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      return false;
    }
  }
  return true;
};

console.log(validAnagram('aaz', 'zza'));

//하나씩 빈도수를 세며 -를 해줌
validAnagram2 = (a, b) => {
  if (a.length !== a.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < a.length; i++) {
    let letter = a[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < b.length; i++) {
    let letter = second[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
};

//다중 포인터
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//고유값 세기 포인터
function countUniqueValues(arr) {
  // add whatever parameters you deem necessary - good luck!
  i = 0;
  j = 1;
  if (arr.length === 0) {
    return 0;
  }
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j];
    } else {
      j += 1;
    }
  }
  return i + 1;
}

console.log(countUniqueValues([]));

//연속된 숫자합 O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  let max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
    console.log(max, temp);
  }
  return max;
}

console.log(
  'maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3) = ',
  maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
);
