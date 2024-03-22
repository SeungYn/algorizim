const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const list = input[1].split(' ').map(Number);
//list.sort((a, b) => a - b);

let start = 0;
let end = 0;
let count = 0;
let sum = 0;
while (start < n) {
  while (end < n && sum < m) {
    sum += list[end];
    end++;
  }

  if (sum === m) count++;

  sum -= list[start];
  start++;
}

console.log(count);
