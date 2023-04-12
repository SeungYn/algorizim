const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const data = input
  .slice(1)
  .map((a) => a.split(' ').map(Number))
  .sort((a, b) => {
    if (a[1] - b[1] < 0) return -1;
    else if (a[1] - b[1] > 0) return 1;
    else {
      return a[0] - b[0];
    }
  });

let result = 1;
let latestTime = data[0][1];

for (let i = 1; i < n; i++) {
  if (latestTime <= data[i][0]) {
    latestTime = data[i][1];
    result++;
  }
}

console.log(result);
