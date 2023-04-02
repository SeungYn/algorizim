const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const map = input.slice(1).map((str) => str.split(' ').map(Number));

function dfs(x, y, count) {
  if (count === 3) {
    const copyMap = map.map((list) => [...list]);
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {}
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (map[i][j] === 0) {
        count++;
        map[i][j] = 1;
        dfs(i, j, count);
        map[i][j] = 0;
        count--;
      }
    }
  }
}

function virusMap(map) {
  const copyMap = map.map((list) => [...list]);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (copyMap[i][j] === 2) virusDfs(i, j, copyMap);
    }
  }

  return reduce(copyMap, 0);
}

function zeroSum(list) {
  return list.reduce((p, c) => (c === 0 ? p + 1 : p), 0);
}

function virusDfs(x, y, copyMap) {
  if (copyMap[x][y] !== 0) return;
  copyMap[x][y] = 2;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
    dfs(nx, ny, copyMap);
  }
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
