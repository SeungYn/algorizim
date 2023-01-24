const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const dist = input[1].split(' ').map((i) => +i);
const oilValue = input[2].split(' ').map((i) => +i);

let prevOilValue = +oilValue[0];

const result = dist.reduce(calc, 0);

function calc(pre, curr, index) {
  let nowOilValue = oilValue[index];

  if (prevOilValue < nowOilValue) {
    nowOilValue = prevOilValue;
  } else {
    prevOilValue = nowOilValue;
  }
  return pre + nowOilValue * curr;
}

console.log(result);
