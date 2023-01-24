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

const result = dist.reduce(calc, 0);

function calc(pre, curr, index) {
  let nowOilValue = oilValue[index];

  if (prevOilValue < nowOilValue) {
    nowOilValue = prevOilValue;
  }
  console.log(prevOilValue);

  return nowOilValue * curr;
}

console.log(result);
