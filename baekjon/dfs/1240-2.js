const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [m, n] = input[0].split(' ').map(Number);
const adjacentList = Array.from({ length: m + 1 }, () => []);
let visited, distance;
let index = m;

for (let i = 1; i < index; i++) {
  const [a, b, k] = input[i].split(' ').map(Number);
  adjacentList[a].push([b, k]);
  adjacentList[b].push([a, k]);
}

for (let i = index; i < index + n; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  visited = Array.from({ length: m + 1 }, () => false);
  distance = Array.from({ length: m + 1 }, () => 0);
  dfs(visited, start, 0);
  console.log(distance[end]);
}

function dfs(visited, start, dist) {
  if (visited[start]) return;
  visited[start] = true;
  distance[start] = dist;

  for (let [nextNode, d] of adjacentList[start]) {
    dfs(visited, nextNode, dist + d);
  }
}
