const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
let n = +input[0];
let result = 0;

while (n > 0) {
  if (!!!(n % 5)) {
    result += n / 5;
    n %= 5;
    break;
  }
  n -= 3;
  if (n < 0) return console.log(-1);
  result += 1;
}
console.log(result);
