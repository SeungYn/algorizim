const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const form = input[0];
console.log(form);
