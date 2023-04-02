const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const arr = input[1].split(' ').map(Number);
console.log(arr);
const visited = new Array(n).fill(false);
let maxValue = -Infinity;

//function dfs(a)
