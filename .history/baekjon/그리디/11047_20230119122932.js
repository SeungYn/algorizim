const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);
const [n, k] = [...input[0]].map((i) => +i);
console.log(n, k);
