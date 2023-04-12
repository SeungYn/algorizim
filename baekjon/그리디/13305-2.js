const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];

const dist = input[1].split(' ').map(Number);
const node = input[2].split(' ').map(Number);

let result = BigInt(node[0]) * BigInt(dist[0]);
let currentIndex = 0;

for (let i = 1; i < n - 1; i++) {
  if (node[i] < node[currentIndex]) {
    result += BigInt(node[i]) * BigInt(dist[i]);
    currentIndex = i;
  } else {
    result += BigInt(node[currentIndex]) * BigInt(dist[i]);
  }
}

//console.log(String(result));

console.log(9007199254740991n + 10);
console.log(9007199254740991n + 20n);
console.log(9007199254740991n + 30n);
