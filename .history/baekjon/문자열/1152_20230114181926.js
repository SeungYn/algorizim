const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
console.log(input);
const data = input.split(' ').filter((i) => i !== '');
console.log(data);
if (data.length > 0) console.log(data.length);
else console.log(0);
