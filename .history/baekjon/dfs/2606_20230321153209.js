const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const nodeCnt = +input[0];
const nodePairCnt = +input[1];
const nodeList = Array.from({ length: nodeCnt + 1 }, (v, i) => []);
const visited = Array.from({ length: nodeCnt + 1 }, (v) => false);

for (let i = 2; i < nodePairCnt + 2; i++) {
  const [a, b] = input[i].split(' ');

  nodeList[a].push(+b);
  nodeList[b].push(+a);
}

function dfs(start) {
  visited[start] = true;
  const currentList = nodeList[start];
  for (const node of currentList) {
    if (!visited[node]) dfs(node);
  }
}

dfs(1);
console.log(visited);
