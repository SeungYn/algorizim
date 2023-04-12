const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const data = input[1].split(' ').map(Number);

let currentHeight;
let result = 0;
for (let i = 0; i < n; i++) {
  if (data[i] === -1) continue;
  currentHeight = data[i] - 1;
  result++;
  for (let j = i + 1; j < n; j++) {
    if (data[j] === currentHeight) {
      currentHeight--;
      data[j] = -1;
    }
  }
}
console.log(result);
