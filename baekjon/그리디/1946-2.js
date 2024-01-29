const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
let testcase = +input[0];
let index = 1;

while (testcase > 0) {
  const n = +input[index];
  index += 1;
  const list = input
    .slice(index, index + n)
    .map((line) => line.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  let result = 0;
  let max = Infinity;

  for (let [a, b] of list) {
    if (max > b) {
      max = b;
      result++;
    }
  }
  console.log(result);

  index += n;
  testcase--;
}
