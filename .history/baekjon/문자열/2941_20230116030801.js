const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString();
console.log(input);
