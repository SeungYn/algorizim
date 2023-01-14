const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString();

let [a, b] = input.split(' ');
a = +[...a].reverse().join('');
b = +[...b].reverse().join('');
console.log(a > b ? a : b);
