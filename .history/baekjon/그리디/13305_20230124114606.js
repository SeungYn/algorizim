const fs = require('fs');
const input = fs
  .readFileSync('./baekjon/input.txt')
  .toString()
  .trim()
  .split('\n');
const n = +input[0];
const dist = input[1].split(' ').map((i) => +i);
const oilValue = input[2].split(' ').map((i) => +i);

let prevOilValue = +oilValue[0];
console.log(prevOilValue);

console.log(dist);
