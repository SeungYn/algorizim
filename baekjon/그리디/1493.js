const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const length = +input[0].split(' ')[0];
const width = +input[0].split(' ')[1];
const height = +input[0].split(' ')[2];
const n = +input[1];
const cubes = new Array(n);

for (let i = 2; i <= n + 1; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  cubes[a] = b;
}

let sumSquare = 0;
let result = 0;

for (let i = n - 1; i >= 0; i--) {
  let currentWidth = 2 ** i;
  sumSquare *= 8;

  let requiredSquareCount =
    parseInt(length / currentWidth) *
      parseInt(width / currentWidth) *
      parseInt(height / currentWidth) -
    sumSquare;
  let usage = Math.min(cubes[i], requiredSquareCount);
  result += usage;
  sumSquare += usage;
}

console.log(sumSquare === length * width * height ? result : -1);

// let length = Number(input[0].split(' ')[0]);
// let width = Number(input[0].split(' ')[1]);
// let height = Number(input[0].split(' ')[2]);
// let cubes = Array(20).fill(0);

// let n = Number(input[1]);

// for (let i = 2; i <= n + 1; i++) {
//   let a = Number(input[i].split(' ')[0]);
//   let b = Number(input[i].split(' ')[1]);
//   cubes[a] = b;
// }

// let size = input[n + 1].split(' ').map(Number)[0];
// let sumSquareCount = 0;
// let res = 0;

// for (let i = size; i >= 0; i--) {
//   let currentWidthLength = 2 ** i;
//   sumSquareCount *= 8;
//   let required =
//     parseInt(length / currentWidthLength) *
//       parseInt(width / currentWidthLength) *
//       parseInt(height / currentWidthLength) -
//     sumSquareCount;

//   let usage = Math.min(required, cubes[i]);

//   res += usage;
//   sumSquareCount += usage;
// }

// console.log(length * width * height === sumSquareCount ? res : '-1');
