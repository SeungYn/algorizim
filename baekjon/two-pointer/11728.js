const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const aList = input[1].split(' ').map(Number);
const bList = input[2].split(' ').map(Number);
let a = 0,
  b = 0;
let str = '';

// while (a < n || b < m) {
//   if ((a < n && aList[a] <= bList[b]) || (a < n && b >= m)) {
//     str += aList[a] + ' ';
//     a++;
//   }

//   if ((b < m && bList[b] <= aList[a]) || (b < m && a >= n)) {
//     str += bList[b] + ' ';
//     b++;
//   }
// }

while (a < n && b < m) {
  if (aList[a] < bList[b]) {
    str += aList[a] + ' ';
    a++;
  } else {
    str += bList[b] + ' ';
    b++;
  }
}

while (a < n) {
  str += aList[a] + ' ';
  a++;
}

while (b < m) {
  str += bList[b] + ' ';
  b++;
}

console.log(str);
