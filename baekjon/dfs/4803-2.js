const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let visited, adjacentList;
let index = 0;
let testcaset = 1;

while (true) {
  const [n, m] = input[index].split(' ').map(Number);
  let count = 0;
  if (n === 0 && m === 0) return;

  visited = Array.from({ length: n + 1 }, () => false);
  adjacentList = Array.from({ length: n + 1 }, () => []);

  for (let i = index + 1; i <= index + m; i++) {
    const [x, y] = input[i].split(' ').map(Number);
    adjacentList[x].push(y);
    adjacentList[y].push(x);
  }

  for (let i = 1; i <= n; i++) {
    if (!isCycle(adjacentList, visited, i, 0)) count++;
  }

  if (count > 1) {
    console.log(`Case ${testcaset}: A forest of ${count} trees.`);
  } else if (count === 1) {
    console.log(`Case ${testcaset}: There is one tree.`);
  } else console.log(`Case ${testcaset}: No trees.`);

  index += m + 1;
  testcaset++;
}

function isCycle(adjacentList, visited, x, y) {
  visited[x] = true;

  for (let next of adjacentList[x]) {
    if (!visited[next]) {
      if (isCycle(adjacentList, visited, next, x)) return true;
    } else {
      if (y !== next) return true;
    }
  }
  return false;
}
