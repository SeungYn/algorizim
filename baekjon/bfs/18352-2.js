const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m, k, x] = input[0].split(' ').map(Number);

//console.log(n, m, k, x);
const list = input.slice(1).map((i) => i.split(' ').map(Number));
//console.log(list);
