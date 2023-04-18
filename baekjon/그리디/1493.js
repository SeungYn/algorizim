const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

function nearestSquare(x) {
  let i = 1;
  while (2 ** i <= x) i += 1;
  return i - 1;
}

let length = Number(input[0].split(' ')[0]);
let width = Number(input[0].split(' ')[1]);
let height = Number(input[0].split(' ')[2]);
let cubes = Array(20).fill(0);

let n = Number(input[1]);

for (let i = 2; i <= n + 1; i++) {
  let a = Number(input[i].split(' ')[0]);
  let b = Number(input[i].split(' ')[1]);
  cubes[a] = b;
}

let size = input[n + 1].split(' ').map(Number)[0];
let sumSquareCount = 0;
let res = 0;

for (let i = size; i >= 0; i--) {
  let currentWidthLength = 2 ** i;
  sumSquareCount *= 8;
  let required =
    parseInt(length / currentWidthLength) *
      parseInt(width / currentWidthLength) *
      parseInt(height / currentWidthLength) -
    sumSquareCount;

  let usage = Math.min(required, cubes[i]);

  res += usage;
  sumSquareCount += usage;
}

console.log(length * width * height === sumSquareCount ? res : '-1');
