const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/문제집/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [h, w, n, m] = input[0].split(' ').map(Number);

let row = 0;
let rowCount = 0;
while (true) {
  if (row >= w) break;
  rowCount++;
  row += m + 1;
}

let col = 0;
let colCount = 0;
while (true) {
  if (col >= h) break;
  colCount++;
  col += n + 1;
}

console.log(colCount * rowCount);
