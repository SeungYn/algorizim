const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().split('\n');
const data = input[0];
const croa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
console.log(data);
