const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);
let testCases = Number(input[0]); // 테스트 케이스의 수
let line = 1;
let str = '';
while (testCases--) {
  let n = Number(input[line]);
  let graph = [0, ...input[line + 1].split(' ').map(Number)];
  let visited = new Array(n + 1).fill(false);
  let finished = new Array(n + 1).fill(false);
  let result = [];
  for (let x = 1; x <= n; x++) {
    // 각 위치에서 연결 요소 계산 및 사이클 판단
    if (!visited[x]) dfs(x, graph, visited, finished, result);
  }

  line += 2; // 다음 테스트 케이스로 이동
  str += n - result.length + '\n';
}
console.log(str);

function dfs(parent, graph, visited, finished, result) {
  console.log(123);
  visited[parent] = true;
  let child = graph[parent];
  if (!visited[child]) dfs(child, graph, visited, finished, result);
  else if (!finished[child]) {
    // 순회가 안 끝났는데 방문이 되어 있다면 사이클이 일어난 것으로 판명 이유는?
    while (parent !== child) {
      result.push(child);
      child = graph[child];
    }
    result.push(parent);
  }
  finished[parent] = true;
}
