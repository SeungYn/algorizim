const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...list);
let result = 1;

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const listSum = list
    .map((v) => (v <= mid ? 0 : v - mid))
    .reduce((a, b) => a + b);
  console.log(
    `result:${result}, start:${start}, end:${end}, mid:${mid}, m:${m}, listSum:${listSum}`
  );
  if (listSum >= m) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
