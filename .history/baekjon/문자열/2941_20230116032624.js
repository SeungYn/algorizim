const fs = require('fs');
const path = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().split('\n');
let data = input[0];
const croa = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
let str = '';
let count = 0;

for (let item of croa) {
  count += data.split(item).length - 1;
  data = data.replace(`/${item}/g`, '');
}

console.log(count);
console.log(data);
