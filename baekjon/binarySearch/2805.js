const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const treeList = input[1].split(' ').map(Number);

let start = 1;
let end = Math.max(...treeList);
let result = 0;

// 높이가 커지면 자른 나무의 합은 작아짐
while (start <= end) {
  const mid = parseInt((start + end) / 2);

  const sum = treeList.reduce((p, c) => {
    if (mid > c) return p + 0;
    return p + c - mid;
  }, 0);

  if (sum >= m) {
    start = mid + 1;
    result = mid;
  } else {
    end = mid - 1;
  }
}

console.log(result);
