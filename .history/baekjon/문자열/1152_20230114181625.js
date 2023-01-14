const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
const data = input.split(' ');
console.log(data);
data[0] === '' && console.log(0);
data[0] !== '' && console.log(data.length);
