const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = [...input[1].split(' ')].map((i) => +i);
list.sort((a, b) => a - b);
let result = 0;
let waitTime = 0;
list.forEach((time) => {
  result += waitTime + time;
  waitTime += time;
});

console.log(result);
