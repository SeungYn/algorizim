const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const data = input[1].split(' ').map(Number);

let currentHeight;
let result = 0;
for (let i = 0; i < n; i++) {
  if (data[i] === -1) continue; // 해당 높이에 풍선이 없으면 다음 풍선 진행
  currentHeight = data[i] - 1; // 처음 화살을 쏴서 마출 풍선의 높이 - 1을 해줌 새 화살을 던질때 해당 높이의 풍선을 맞췄기 때문
  result++;
  for (let j = i + 1; j < n; j++) { // 다음 풍선 끝까지 확인
    if (data[j] === currentHeight) {  // 해당 높이에 풍선이 있다면
      currentHeight--; // 현재 화살 높이 - 1
      data[j] = -1; // 해당 풍선을 없애줌
    }
  }
}
console.log(result);
