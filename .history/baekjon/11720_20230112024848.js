const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
const data = input.split('\n');
const n = +data[0];
const list = data[1];
const result = list.split('').reduce((p, c) => p + +c, 0);
console.log(result);
