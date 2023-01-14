const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();

const data = input.split(' ').filter((i) => i !== '');

if (data.length > 0) console.log(data.length);
else console.log(0);
