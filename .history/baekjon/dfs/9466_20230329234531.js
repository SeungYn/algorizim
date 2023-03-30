const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const result = [];
let index = 1;

for (let i = 0; i < n; i++) {
  const studentCnt = input[index];
  const students = input[index + 1].split(' ').map(Number);
  console.log(students);

  break;
  index += 2;
}
