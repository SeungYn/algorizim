const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [M, N] = input[0].split(' ').map((i) => +i);

//let visited;
const graph = Array.from({ length: M + 1 }, () => []);

for (let i = 1; i < M; i++) {
  const [a, b, d] = input[i].split(' ').map((i) => +i);
  graph[a].push([b, d]);
  graph[b].push([a, d]);
}

function dfs(x, dist) {
  if (visited[x]) return; // 각 노드는 한 번만 방문
  visited[x] = true; // 방문 처리
  distance[x] = dist;
  for (let [y, cost] of graph[x]) dfs(y, dist + cost);
}

// const answer = [];

// for (let i = M; i < M + N; i++) {
//   visited = Array.from({ length: M + 1 }, () => false);
//   const [start, end] = input[i].split(' ').map((i) => +i);
//   visited[start] = true;
//   dfs(start, 0, end);
// }

// for (let i = 0; i < N; i++) {
//   console.log(answer[i]);
// }

// function dfs(current, dist, target) {
//   if (current === target) return answer.push(dist);
//   for (let next of graph[current]) {
//     const [nextNode, nextDist] = next;
//     if (!visited[nextNode]) {
//       visited[nextNode] = true;
//       dfs(nextNode, dist + nextDist, target);
//     }
//   }
// }
