const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const data = input.slice(1).map((str) => [...str.split(' ').map((i) => +i)]);
data.sort((a, b) => {
  if (a[1] != b[1]) return a[1] - b[1];
  else return a[0] - b[0];
});

let count = 1;
let before = data[0];

for (let i = 1; i < n; i++) {
  if (before[1] <= data[i][0]) {
    before = data[i];
    count++;
  }
}
console.log(count);
