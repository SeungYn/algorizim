/**
 * bfs로 풀려면 각 역마다 링크로 역들을 추가해 줘야하는데 개수가 많아서 힘듬
 * 하이퍼튜브 기준으로 bfs를 돌수가 없음
 */

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k, m] = input[0].split(' ').map(Number);

const graph = Array.from({ length: n + m + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const list = input[i].split(' ').map(Number);
  for (let j = 0; j < k; j++) {
    graph[list[j]].push(n + i);
    graph[n + i].push(list[j]);
  }
}

const countList = Array.from({ length: n + m + 1 }).fill(1);

const q = [1];

while (q.length > 0) {
  const now = q.shift();

  for (let next of graph[now]) {
    if (countList[next] !== 1 || next === 1) continue;
    countList[next] = countList[now] + 1;
    q.push(next);
  }
}

if (n === 1) console.log(1);
else {
  if (countList[n] === 1) console.log(-1);
  else {
    console.log(parseInt(countList[n] / 2) + 1);
  }
}
