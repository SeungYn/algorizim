const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

let testcase = +input[0];
let line = 1;

while (testcase > 0) {
  const [v, k] = input[line].split(' ').map(Number);
  let visited = new Array(v + 1).fill(-1);
  const graph = Array.from({ length: v + 1 }, () => []);

  for (let i = 1; i <= k; i++) {
    const [a, b] = input[i + line].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) bfs(visited, i, graph);
  }

  console.log(check(graph, visited, v));
  line += k + 1;
  testcase--;
}

function bfs(visited, start, nodeList) {
  visited[start] = 0;
  const queue = [start];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    for (const node of nodeList[currentNode]) {
      if (visited[node] === -1) {
        visited[node] = (visited[currentNode] + 1) % 2;
        queue.push(node);
      }
    }
  }
}

function check(graph, visited, n) {
  for (let i = 1; i <= n; i++) {
    for (let node of graph[i]) {
      if (visited[i] === visited[node]) return 'NO';
    }
  }
  return 'YES';
}
