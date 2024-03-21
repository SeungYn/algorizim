const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const data = fs.readFileSync(PATH).toString().trim().split('\n');
let [n, k] = data[0].split(' ').map(Number);
const list = data[1].split(' ').map(Number);

let start = 0;
let end = 0;
let len = 0;
let result = 0;
while (start < n) {
  while (end < n) {
    if (list[end] % 2) {
      if (k > 0) {
        k--;
        end++;
      } else break;
    } else {
      end++;
      len++;
      result = Math.max(result, len);
    }
  }

  if (list[start] % 2) {
    k++;
  } else len--;
  start++;
}
console.log(result);
// 1 2 3 4 5 6 7 8
