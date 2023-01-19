const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const data = input.slice(1).map((str) => [...str.split(' ').map((i) => +i)]);
data.sort((a, b) => a[1] - b[1]);
