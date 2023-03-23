const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map((i) => +i);

const visited = Array.from({ length: M + 1 }, () => false);
const graph = Array.from({ length: M + 1 }, () => []);

for (let i = 1; i < M + 1; i++) {
  const [a, b, d] = input[i].split(' ').map((i) => +i);
  console.log(a, b, d);
}
console.log(visited);
const answer = [];

function dfs(start, end) {}
