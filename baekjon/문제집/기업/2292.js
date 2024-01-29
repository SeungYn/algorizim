const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/문제집/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
let cnt = 1;
let bee = 1;
while (n > bee) {
  bee += 6 * cnt;
  cnt++;
}

console.log(cnt);
