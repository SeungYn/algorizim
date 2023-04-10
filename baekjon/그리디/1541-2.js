const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const group = input[0].split('-');
let result = 0;

for (let i = 0; i < group.length; i++) {
  const sum = group[i]
    .split('+')
    .map(Number)
    .reduce((p, c) => p + c, 0);
  if (i === 0) result += sum;
  else result -= sum;
}

console.log(result);
