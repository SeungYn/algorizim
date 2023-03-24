const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

let index = 0;
while (true) {
  console.log(index);
  const [m, n] = input[index].split(' ').map(Number);
  if (m === 0 && n === 0) return;

  var graph = Array.from({ length: m + 1 }, () => []);
  var parent = Array.from({ length: m + 1 }, (_, i) => i);
  var visited = new Array(m + 1).fill(false);

  for (let i = index + 1; i < index + 1 + n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  let result = 0;
  for (let i = 1; i < m + 1; i++) {
    if (visited[i]) continue;
    if (index === 10) {
    }
    if (index === 10) {
      console.log(dfs(i, i), '검사', i);
    }
    // if (!dfs(i, i)) {
    //   console.log('index = ', index, 'i = ', i, result);
    //   result += 1;
    // }
  }

  if (result === 1) console.log('There is one tree.');
  else if (result === 0) console.log('No trees.');
  else console.log(`A forest of ${result} trees.`);

  index += n + 1;
}

function dfs(start, pare) {
  visited[start] = true;
  if (index === 10) {
    console.log('스타트', pare, start);
  }
  for (let next of graph[start]) {
    if (next === pare && start - 1 !== next && start + 1 !== next) {
      if (index === 10) {
        console.log('트루 보내기', next, pare, start);
      }

      return true;
      console.log('d왜지?');
    }
    if (visited[next]) continue;
    parent[next] = pare;
    //여기서 리턴을 안해줘서 그럼
    if (dfs(next, pare)) return true;
    console.log('d왜지?', start, pare, next);
  }

  return false;
}
