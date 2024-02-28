const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

//const [k, n] = input[0].split(' ').map(Number);
//const list = input.slice(1).map(Number);
const list = [10, 20, 30, 40, 50];
const n = 3;
let start = 1,
  end = Math.max(...list);
let res = 0;

while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const result = list.reduce((p, c) => p + parseInt(c / mid), 0);

  console.log(result, start, end, mid);

  if (result >= n) {
    res = mid;
    start = mid + 1;
  } else {
    end = mid - 1;
  }
}

console.log(res);
