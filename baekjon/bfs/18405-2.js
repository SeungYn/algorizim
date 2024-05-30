const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

class Queue {
  constructor() {
    this.arr = {};
    this.tailIndex = 0;
    this.headIndex = 0;
  }

  enqueue(data) {
    this.arr[this.tailIndex++] = data;
  }

  dequeue() {
    const deleteDate = this.arr[this.headIndex];
    delete this.arr[this.headIndex];
    this.headIndex++;
    return deleteDate;
  }

  get size() {
    return this.tailIndex - this.headIndex;
  }
}
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
const [n, k] = input[0].split(' ').map(Number);
const map = [new Array(n + 1).fill(0)].concat(
  input.slice(1, 1 + n).map((s) => [0].concat(s.split(' ').map(Number)))
);
const visited = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

const [s, x, y] = input[1 + n].split(' ').map(Number);

const location = [];
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    if (map[i][j] !== 0) location.push([i, j, map[i][j]]);
  }
}

location.sort((a, b) => a[2] - b[2]);

function bfs() {
  const q = new Queue();
  for (const [x, y] of location) {
    q.enqueue([x, y, 0]);
  }

  while (q.size > 0) {
    const [lx, ly, ls] = q.dequeue();

    if (ls >= s) continue;
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [lx + dx[i], ly + dy[i]];

      if (nx < 1 || nx > n || ny < 1 || ny > n) continue;
      if (map[nx][ny] !== 0) continue;
      map[nx][ny] = map[lx][ly];
      visited[nx][ny] = ls + 1;
      q.enqueue([nx, ny, ls + 1]);
    }
  }
}

bfs();

console.log(map[x][y]);

// const q = new Queue();
// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);
// console.log(q.size);
