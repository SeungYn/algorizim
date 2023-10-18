const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);
const list = input.slice(1).map(Number);

let coinCount = 0;

// 굳이 if로 확인할 필요가 없음
// for (let i = n - 1; i >= 0; i--) {
//   let s = parseInt(k / list[i]);
//   let rest = k % list[i];
//   k = rest;
//   coinCount += s;
// }

for (let i = n - 1; i >= 0; i--) {
  coinCount += parseInt(k / list[i]);
  k %= list[i];
}
console.log(coinCount);
