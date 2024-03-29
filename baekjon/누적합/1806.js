const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
console.log(n, m);
const list = input[1].split(' ').map(Number);
console.log(list);
let sum = 0;
const sumList = list.map((v) => (sum += v));
console.log(sumList);
