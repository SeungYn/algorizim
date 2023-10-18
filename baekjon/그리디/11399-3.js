const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input[1].split(' ').map(Number);
list.sort((a, b) => a - b);

let currentWaitTime = 0;
let result = 0;

list.forEach((i) => {
  currentWaitTime += i;
  result += currentWaitTime;
});

console.log(result);
