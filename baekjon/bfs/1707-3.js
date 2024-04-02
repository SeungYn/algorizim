const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(x) {
    const node = new Node(x);
    if (this.start === null) {
      this.start = node;
      this.end = node;
    } else {
      this.end.next = node;
      this.end = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error('empty');
    const deleteNode = this.start;
    this.start = this.start.next;
    this.size--;
    if (this.size === 0) {
      this.end = null;
    }

    return deleteNode;
  }
}

class Node {
  constructor(x) {
    this.x = x;

    this.next = null;
  }
}

let index = 1;

while (index < input.length) {
  const [v, e] = input[index].split(' ').map(Number);
  const list = input.slice(index + 1, index + 1 + e);

  const map = Array.from({ length: v + 1 }, () => []);
  const visited = new Array(v + 1).fill(-1);

  for (const line of list) {
    const [a, b] = line.split(' ').map(Number);
    map[a].push(b);
    map[b].push(a);
  }

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) {
      bfs(i, map, visited);
    }
  }

  let flag = true;
  for (let i = 1; i <= v; i++) {
    for (let j of map[i]) {
      if (visited[i] === visited[j]) {
        flag = false;

        break;
      }
    }
    if (!flag) break;
  }

  if (
    Array.from({ length: v }, (_, i) => i + 1).every((v) =>
      map[v].every((c) => visited[c] !== visited[v])
    )
  )
    console.log('YES');
  else console.log('NO');

  index += 1 + e;
}

function bfs(x, map, visited) {
  const q = new Queue();
  visited[x] = 1;
  q.enqueue(x);

  while (q.size > 0) {
    const { x } = q.dequeue();

    for (let next of map[x]) {
      if (visited[next] === -1) {
        visited[next] = (visited[x] + 1) % 2;
        q.enqueue(next);
      }
    }
  }
}
