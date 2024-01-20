const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = [0].concat(input.slice(1).map(Number));

const visited = new Array(n + 1).fill(false);
const result = [];
const finished = new Array(n + 1).fill(false);
for (let i = 1; i <= n; i++) {
  if (visited[i]) continue;

  dfs(i, list, visited, finished, result);
}
console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));

function dfs(x, list, visited, finished, result) {
  visited[x] = true;
  let y = list[x];
  if (!visited[y]) dfs(y, list, visited, finished, result);
  else if (!finished[y]) {
    while (x !== y) {
      result.push(y);
      y = list[y];
    }
    result.push(x);
  }
  finished[x] = true;
}

// 이 풀이의 문제점은 매번 visited를 초기화 해줘야함
// function dfs(root, node, visited, list, result) {
//   if (root === 5) console.log(root, node, visited, list, result);
//   if (node === root) return result;
//   if (visited[node]) return [];
//   visited[node] = true;
//   result.push(node);
//   return dfs(root, list[node], visited, list, result);
// }
// 1 2 3
// 3 1 2
