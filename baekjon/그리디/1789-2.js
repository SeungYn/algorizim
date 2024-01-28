// 16 1 2 3 4 5
const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let n = +input[0];
let count = 0;
let result = 0;
while (n > 0) {
  if (n === 0) break;
  const rest = n - count;

  if (rest <= count) {
    if (n > count) {
      count++;
      continue;
    } else if (count === n) {
      break;
    }
  }
  n -= count;

  count++;
  result++;
}

console.log(result);
