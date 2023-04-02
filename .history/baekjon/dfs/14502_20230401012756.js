const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

console.log(input);
const [n, m] = input[0].split(' ').map(Number);
console.log(n, m);
