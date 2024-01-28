const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const list = input[0];
console.log(
  list.split('-').reduce((p, c, i) => {
    const localSum = c
      .split('+')
      .map(Number)
      .reduce((a, b) => a + b);
    if (i === 0) return p + localSum;
    return p - localSum;
  }, 0)
);
