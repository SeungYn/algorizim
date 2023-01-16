const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().split('\n');
let data = input[0];
const croa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let count = 0;

for (let item of croa) {
  count += data.split(item).length - 1;
  const re = new RegExp(item, 'g');
  data = data.replace(re, '');
  console.log(data);
}

for (let i of data) {
  count++;
}
console.log(count);
