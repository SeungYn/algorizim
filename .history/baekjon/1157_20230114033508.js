const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();

const data = input.split('\n')[0].toLocaleUpperCase();
console.log(data);
