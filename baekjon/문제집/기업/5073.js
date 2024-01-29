const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/문제집/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const list = input.map((line) => line.split(' ').map(Number));

for (let triangle of list) {
  if (triangle[0] === 0) return;
  triangle.sort((a, b) => a - b);
  const [a, b, c] = triangle;
  if (a + b <= c) {
    console.log('Invalid');
    continue;
  }
  const set = new Set(triangle);
  const size = set.size;
  if (size === 3) console.log('Scalene');
  else if (size === 2) console.log('Isosceles');
  else console.log('Equilateral');
}
