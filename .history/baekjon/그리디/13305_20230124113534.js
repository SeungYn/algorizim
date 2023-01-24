const fs = require('fs');
const input = fs
  .readFileSync('./baekjon/input.txt')
  .toString()
  .trim()
  .split('\n');
console.log(input);
