const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const list = input[0];

const group = list.split('-');

let result = 0;

for (let i = 0; i < group.length; i++) {
  let sum = group[i]
    .split('+')
    .map(Number)
    .reduce((p, c) => p + c);
  if (i === 0) result += sum;
  else result -= sum;
}

console.log(result);
