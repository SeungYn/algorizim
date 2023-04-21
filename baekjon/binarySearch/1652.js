const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [k, n] = input[0].split(' ').map(Number);
const list = input.slice(1).map(Number);

//단위가 증가할수록 전선의 개수는 증가함

let start = 1;
let end = Math.max(...list);
let result = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const count = list.reduce((p, c) => {
    return p + Math.floor(c / mid);
  }, 0);

  if (count >= n) {
    result = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}
