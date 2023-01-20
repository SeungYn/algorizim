const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
console.log(n);
console.log(input[1]);
const list = [...input[1]].map((i) => +i);
console.log(list);
