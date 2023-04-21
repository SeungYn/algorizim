const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
const m = +input[2];
const targetList = input[3].split(' ').map(Number);

list.sort((a, b) => a - b);
let answer = [];
for (let i = 0; i < m; i++) {
  answer.push(betweenCount(list, targetList[i]));
}

console.log(answer.join(' '));

function betweenCount(arr, target) {
  const left = lowerBound(arr, 0, arr.length, target);
  const right = upperBound(arr, 0, arr.length, target);

  return right - left;
}

function upperBound(arr, start, end, target) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);
    if (arr[mid] > target) end = mid;
    else {
      start = mid + 1;
    }
  }

  return end;
}

function lowerBound(arr, start, end, target) {
  while (start < end) {
    const mid = parseInt((start + end) / 2);

    if (arr[mid] >= target) end = mid;
    else {
      start = mid + 1;
    }
  }

  return end;
}

// 1 2 2 2 3 3 3 3
