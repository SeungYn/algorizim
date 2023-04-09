const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);
const coinKind = input.slice(1).map(Number);
let result = 0;
for (let i = n - 1; i >= 0; i--) {
  if (k >= coinKind[i]) {
    result += Math.floor(k / coinKind[i]);
    k %= coinKind[i];
  }
}

console.log(result);
