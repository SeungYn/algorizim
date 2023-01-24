const fs = require('fs');
const input = fs
  .readFileSync('./baekjon/input.txt')
  .toString()
  .trim()
  .split('\n');
const n = +input[0];
const dist = input[1];
const oilValue = input[2];

let prevOilValue = +oilValue[1][0];
console.log(prevOilValue);
