const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);
let index = 0;
while (true) {
  const [m, n] = input[index].split(' ').map(Number);
  if (m === 0 && n === 0) return;
  break;
}
