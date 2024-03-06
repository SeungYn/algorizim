const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const arr = new Array(+input[0] + 1);
arr[0] = 0n;
arr[1] = 1n;
arr[2] = 2n;

for (let i = 3; i < arr.length; i++) {
  arr[i] = (arr[i - 2] % 15746n) + (arr[i - 1] % 15746n);
}
console.log(Number(arr[+input[0]] % 15746n));
