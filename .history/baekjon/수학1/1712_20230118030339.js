const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [A, B, C] = input[0].split(' ').map((i) => +i);

if (B >= C) console.log(-1);
else {
  let count = 1;
  while (true) {
    let result = A + B * count;
    let result2 = count * C;

    if (result < result2) {
      console.log(result, result2);
      count++;
      break;
    }
    count++;
  }
  console.log(count);
}
