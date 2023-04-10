const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input[1].split(' ').map(Number);
let result = 0;
let wait = 0;
list.sort((a, b) => a - b);
console.log(list);
for (const time of list) {
  result += wait + time;
  wait += time;
}

console.log(result);
