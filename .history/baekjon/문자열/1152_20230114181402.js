const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
const data = input.split(' ');
data[0] === '' && return console.log(0);
console.log(data.length);
