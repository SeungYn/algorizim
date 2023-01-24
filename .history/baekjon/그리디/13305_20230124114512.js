const fs = require('fs');
const input = fs
  .readFileSync('./baekjon/input.txt')
  .toString()
  .trim()
  .split('\n');
const n = +input[0];
const dist = input[1].map((i) => +i);
const oilValue = input[2].map((i) => +i);

let prevOilValue = +oilValue[0];
console.log(prevOilValue);

const result = dist.reduce();
