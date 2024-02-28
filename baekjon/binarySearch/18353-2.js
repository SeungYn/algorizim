const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
list.reverse();
const arr = [0];

list.forEach((v) => {
  const index = lowerBound(arr, v);

  if (index === arr.length) arr.push(v);
  else arr[index] = v;
});

console.log(list.length - arr.length + 1);

function lowerBound(arr, target) {
  let result = arr.length;
  let start = 0,
    end = arr.length;
  if (arr[result - 1] < target) return result;

  while (start <= end) {
    const mid = parseInt((start + end) / 2);
    const value = arr[mid];
    if (target <= value) {
      end = mid - 1;
      result = mid;
    } else start = mid + 1;
  }

  return result;
}
