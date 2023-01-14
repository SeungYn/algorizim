const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString();

const [a, b] = input.split(' ');
console.log([...a].reverse().join(''));
