const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const list = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

const budget = +input[2];
let start = 1;
let end = list.reduce((p, c) => Math.max(p, c), 0);

while (start <= end) {
  let mid = parseInt((start + end) / 2);

  const sum = list.reduce((p, c) => p + Math.min(mid, c), 0);

  if (budget >= sum) {
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
console.log(end);

// const dividedValue = parseInt(budget / n);
// const maxValueOfList = list[n - 1];
// const listSum = list.reduce((p, c) => p + c, 0);

// if (budget >= listSum) return console.log(maxValueOfList);

// const upperLine = upperBound(list, 0, list.length, dividedValue);

// let possibleListSum = 0;
// for (let i = 0; i < upperLine; i++) {
//   possibleListSum += list[i];
// }

// console.log(parseInt((budget - possibleListSum) / (n - upperLine)));

// function upperBound(arr, start, end, target) {
//   while (start < end) {
//     console.log(start, end);
//     const mid = parseInt((start + end) / 2);
//     if (arr[mid] > target) end = mid;
//     else start = mid + 1;
//   }
//   return end;
// }
