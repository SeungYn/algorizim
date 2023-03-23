const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map((i) => +i);

const visited = Array.from({ length: M + 1 }, () => false);
const graph = Array.from({ length: M + 1 }, () => []);

for (let i = 1; i < M; i++) {
  const [a, b, d] = input[i].split(' ').map((i) => +i);
  graph[a].push([b, d]);
  graph[b].push([a, d]);
}
console.log(graph);
const answer = [];

for (let i = M; i < M + N; i++) {
  console.log(i);
}

function dfs(current, dist, target) {
  if (current === target) return answer.push(dist);

  for (let next of graph[current]) {
    const [nextNode, nextDist] = next;
    if (!visited[nextNode]) {
      visited[nextNode] = true;
      dfs(nextNode, dist + nextDist, target);
    }
  }
}
