const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map((i) => +i);

const visited = Array.from({ length: M + 1 }, () => false);
const graph = Array.from({ length: M + 1 }, () => []);
console.log(graph)
console.log(visited);
const answer = [];
for (let i = 0; i < N; i++) { }

function dfs(start, end) {
	if()
}
