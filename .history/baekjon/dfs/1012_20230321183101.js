const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/stdin/dev' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const testCount = +input[0];
let line = 1;
for (let i = 0; i < testCount; i++) {
  //가로, 세로 ,배추갯수

  const [M, N, K] = input[line];
  console.log(input[line], line);
  console.log(M, N, K);
  line += +K + 1;
  break;
}
