const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const sum = +input[2];

let result = 0;
let start = 1;
let end = list.reduce((a, b) => Math.max(a, b));

while (start <= end) {
  // if (list.reduce((p, c) => p + c) <= sum) {
  //   result = list[list.length - 1];
  //   break;
  // }

  const mid = parseInt((start + end) / 2);

  // const lSum = list.reduce((p, c) => {
  //   if (c <= mid) return p + c;
  //   return p + mid;
  // }, 0);

  let lSum = 0;
  for (x of list) {
    lSum += Math.min(mid, x);
  }

  if (lSum <= sum) {
    start = mid + 1;
    result = mid;
  } else end = mid - 1;
}

console.log(result);
