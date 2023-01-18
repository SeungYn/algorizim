const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [A, B, C] = input[0].split(' ').map((i) => +i);

const res = -A / (B - C);
if (res < 0) console.log(-1);
else console.log(Math.floor(res));
