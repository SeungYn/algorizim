const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().split('\n');
const n = +input[0];
const list = input.slice(1);
console.log(list);
