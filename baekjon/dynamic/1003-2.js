const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
let cnt = 1;

const arr = Array.from({ length: 41 });
arr[0] = 0;
arr[1] = 1;
for (let i = 2; i <= 40; i++) {
  arr[i] = arr[i - 2] + arr[i - 1];
}

while (cnt <= n) {
  const num = +input[cnt];
  if (num === 0) console.log(1, 0);
  else console.log(arr[num - 1], arr[num]);

  cnt++;
}
