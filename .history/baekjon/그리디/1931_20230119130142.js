const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const data = input.slice(1).map((str) => [...str.split(' ').map((i) => +i)]);
data.sort((a, b) => {
  if (a[1] - b[1] > 0) return 1;
  else if (a[1] - b[1] < 0) return -1;
  else {
    if (a[0] - b[0] > 0) return 1;
    else if (a[0] - b[0] < 0) return -1;
    else return 0;
  }
});

let count = 0;
let before = data[0];

for (let i = 1; i < n; i++) {
  if (before[1] <= data[i][0]) {
    console.log(123);
    before = data[i];
    count++;
  }
}
console.log(count);
