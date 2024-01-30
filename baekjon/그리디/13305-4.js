const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
const node = input[2].split(' ').map(Number);

let minOil = node[0];
let result = 0n;

for (let i = 0; i < list.length; i++) {
  minOil = Math.min(node[i], minOil);

  result += BigInt(minOil * list[i]);
}

console.log(result.toString());
