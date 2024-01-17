const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

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

function dfs(x, graph, visited, finished, result) {
  visited[x] = true;
  const y = graph[x];
  if (!visited[y]) dfs(y, graph, visited, finished, result);
  else if (!finished[y]) {
    while (y !== x) {
      result.push(y);
    }
    result.push(x);
  }
  finished[x] = true;
}

// function dfs(x, graph, visited, finished, result) {
//   visited[x] = true;

//   let y = graph[x];
//   if (!visited[y]) {
//     dfs(y, graph, visited, finished, result);
//   } else if (!finished[y]) {
//     while (y !== x) {
//       result.push(y);
//       y = graph[y];
//     }
//     result.push(x);
//   }
//   finished[x] = true;
// }

// for (let i = 1; i < input.length - 1; i += 2) {
//   const n = +input[i];
//   const list = [0].concat(input[i + 1].split(' ').map(Number));
//   let result = 0;
//   for (let k = 1; k <= n; k++) {
//     const visited = new Array(n + 1).fill(false);
//     visited[k] = true;
//     if (!dfs(list, visited, k, list[k])) result++;
//   }

//   console.log(result);
// }

// function dfs(list, visited, parent, child) {
//   if (parent === child) return true;
//   if (visited[child]) return false;
//   visited[child] = true;

//   return dfs(list, visited, parent, list[child]);
// }
