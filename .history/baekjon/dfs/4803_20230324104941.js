const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let index = 0;
while (true) {
  const [m, n] = input[index].split(' ').map(Number);
  if (m === 0 && n === 0) break;

  var graph = Array.from({ length: m + 1 }, () => []);
  var parent = Array.from({ length: m + 1 }, (_, i) => i);
  var visited = new Array(m + 1).fill(false);

  for (let i = index + 1; i < index + 1 + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let result = 0;
  console.log(graph);
  for (let i = 1; i < m + 1; i++) {
    if (visited[i]) continue;
    if (index === 10) {
    }

    if (!dfs(i, i)) {
      console.log(i, '통과');
      result += 1;
    }
  }
  console.log(parent);
  if (result === 1) console.log('There is one tree.');
  else if (result === 0) console.log('No trees.');
  else console.log(`A forest of ${result} trees.`);

  index += n + 1;
}

// let index = 0;
// while (true) {
//   const [m, n] = input[index].split(' ').map(Number);
//   if (m === 0 && n === 0) break;

//   var graph = Array.from({ length: m + 1 }, () => []);
//   var parent = Array.from({ length: m + 1 }, (_, i) => i);
//   var visited = new Array(m + 1).fill(false);

//   for (let i = index + 1; i < index + 1 + n; i++) {
//     const [a, b] = input[i].split(' ').map(Number);
//     graph[a].push(b);
//     graph[b].push(a);
//   }
//   let result = 0;
//   console.log(graph);
//   for (let i = 1; i < m + 1; i++) {
//     if (visited[i]) continue;
//     if (index === 10) {
//     }

//     if (!dfs(i, i)) {
//       console.log(i, '통과');
//       result += 1;
//     }
//   }
//   console.log(parent);
//   if (result === 1) console.log('There is one tree.');
//   else if (result === 0) console.log('No trees.');
//   else console.log(`A forest of ${result} trees.`);

//   index += n + 1;
// }

// function dfs(start, pare) {
//   visited[start] = true;

//   for (let next of graph[start]) {
//     // if (next === pare && start - 1 !== next && start + 1 !== next) {
//     //   return true;
//     // }
//     // if (visited[next]) continue;
//     // parent[next] = pare;
//     // //여기서 리턴을 안해줘서 그럼 그래서 사이클이여도 결국 아래도 가니깐 false 반환했었음
//     // if (dfs(next, pare)) return true;
//     if (next === parent) continue; // 부모 노드는 무시합니다.

//     if (visited[next]) {
//       // 사이클을 이루는 노드를 발견한 경우
//       return true;
//     }

//     if (dfs(next, start)) return true; // 재귀적으로 dfs를 호출합니다.
//   }

//   return false;
// }
