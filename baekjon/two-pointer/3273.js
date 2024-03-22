const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
const x = +input[2];
let cnt = 0;
list.sort((a, b) => a - b);
let start = 0;
let end = n - 1;
// for (let i = 0; i < n; i++) {
//   const left = list[i];
//   for (let j = i + 1; j < n; j++) {
//     if (left + list[j] === x) {
//       cnt++;
//       break;
//     }
//   }
// }

while (true) {
  while (end > 0 && list[start] + list[end] > x) {
    end--;
  }
  if (list[start] + list[end] === x) {
    cnt++;
    end--;
  }

  start++;
  if (start >= end) break;
}

console.log(cnt);
