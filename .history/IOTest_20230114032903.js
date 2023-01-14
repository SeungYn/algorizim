const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();

const data = input.split('\n');
const n = +data[0];
for (let i = 1; i <= n; i++) {
  console.log(data[i]);
}
