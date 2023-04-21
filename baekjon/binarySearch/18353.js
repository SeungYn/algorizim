const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);

const answer = [];

list.reverse();

for (let i = 0; i < n; i++) {
  if (answer.length === 0) answer.push(list[i]);
  else {
    const lastIndex = answer.length - 1;
    if (answer[lastIndex] < list[i]) answer.push(list[i]);
    else {
      const insertIndex = lowerBound(answer, 0, answer.length, list[i]);
      if (answer[insertIndex] > list[i]) answer[insertIndex] = list[i];
    }
  }
}

console.log(n - answer.length);

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
