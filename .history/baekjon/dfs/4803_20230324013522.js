const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);
let index = 0;
while (true) {
  console.log(index);
  const [m, n] = input[index].split(' ').map(Number);
  if (m === 0 && n === 0) return;

  const graph = Array.from({ length: m + 1 }, () => []);
  const parent = Array.from({ length: m + 1 }, (_, i) => i);

  for (let i = index + 1; i < index + 1 + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a, b);
  }
  break;

  index += n + 1;
}
