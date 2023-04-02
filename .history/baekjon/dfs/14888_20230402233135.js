const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
const calc = input[2].split(' ').map(Number);

const calcList =
  '+'.repeat(calc[0]) +
  '-'.repeat(calc[1]) +
  '*'.repeat(calc[2]) +
  '/'.repeat(calc[3]);

console.log(calcList);
