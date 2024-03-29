const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

let [n, k] = input[0].split(' ').map(Number);
const list = input.slice(1).map(Number);
let result = 0;

while (k > 0) {
  const coin = list.pop();

  const share = parseInt(k / coin);
  k %= coin;
  result += share;
}

console.log(result);
