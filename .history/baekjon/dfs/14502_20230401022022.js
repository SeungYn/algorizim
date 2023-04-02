const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const map = input.slice(1).map((str) => str.split(' ').map(Number));
let result = 0;

dfs(0);
console.log(result);

function dfs(count) {
  if (count === 3) {
    const res = virusMapResult(map);
    result = Math.max(res, result);
    return;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        map[i][j] = 1;
        dfs(i, j, count + 1);
        map[i][j] = 0;
      }
    }
  }
}

function virusMapResult(map) {
  const copyMap = map.map((list) => [...list]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copyMap[i][j] === 2) virusDfs(i, j, copyMap);
    }
  }

  return reduce(zeroSum, 0, copyMap);
}

function virusDfs(x, y, copyMap) {
  copyMap[x][y] = 2;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    if (copyMap[nx][ny] === 0) virusDfs(nx, ny, copyMap);
  }
}

function zeroSum(prev, list) {
  return prev + list.reduce((p, c) => (c === 0 ? p + 1 : p), 0);
}

function reduce(f, acc, iter) {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
}
