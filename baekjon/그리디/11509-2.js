const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const data = input[1].split(' ').map(Number);

const height = new Array(1000001).fill(0);
let result = 0;
for (const x of data) {
  if (height[x] > 0) { // 해당 높이에 화살이 있다면 해당 풍선의 높이를 -1을 해주며, 맞췄으니 -1 칸에 +1을 해줌
    height[x] -= 1;
    height[x - 1] += 1;
  } else { // 해당 높이에 화살이 없다면
    height[x - 1] += 1;
    result++; // 화살 쏘기
  }
}

console.log(result);
