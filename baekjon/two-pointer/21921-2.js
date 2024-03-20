const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const data = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, x] = data[0].split(' ').map(Number);
const list = data[1].split(' ').map(Number);

let start = 0;
let end = x - 1;
let sum = 0;
let result = 0;
let cnt = 0;

for (let i = 0; i < x; i++) {
  sum += list[i];
}
cnt = 1;
result = Math.max(sum, result);
start++;
end++;
while (end < n) {
  sum -= list[start - 1];
  sum += list[end];

  if (sum > result) {
    cnt = 1;
    result = sum;
  } else if (sum === result) {
    cnt++;
  }

  end++;
  start++;
}
if (result === 0) {
  console.log('SAD');
} else {
  console.log(result);
  console.log(cnt);
}
