const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input[1].split(' ').map(Number);
const hight = new Array(1000001).fill(0);
let result = 0;

for (let h of list) {
  if (!hight[h]) {
    result++;
    hight[h - 1] += 1;
    continue;
  }
  hight[h] -= 1;
  hight[h - 1]++;
}

console.log(result);
