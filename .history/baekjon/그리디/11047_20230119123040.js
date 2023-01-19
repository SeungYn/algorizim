const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k] = [...input[0].split(' ')].map((i) => +i);
const data = input.slice(1).map((i) => +i);
let index = n - 1;
console.log(data);
