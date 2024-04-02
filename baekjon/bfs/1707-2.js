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

  enqueue(x, y) {
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
  const edges = input.slice(index + 1, index + 1 + e);
  const map = Array.from({ length: v + 1 }, () => []);
  const visited = new Array(v + 1).fill(-1);
  let flag = true;
  let startX;
  for (let line of edges) {
    const [x, y] = line.split(' ').map(Number);
    map[x].push(y);
    map[y].push(x);
    startX = x;
  }

  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) bfs(i, map, visited);
  }

  console.log(check(map, visited) ? 'YES' : 'NO');
  index += 1 + e;
}

function bfs(x, map, visited) {
  visited[x] = 1;
  const q = new Queue();
  q.enqueue(x);

  while (q.size > 0) {
    const { x } = q.dequeue();

    for (let next of map[x]) {
      if (visited[next] === visited[x]) {
        flag = false;
        //break;
      }
      if (visited[next] !== -1) continue;
      visited[next] = visited[x] === 0 ? 1 : 0;
      q.enqueue(next);
    }
  }
}

function check(map, visited) {
  for (let i = 1; i < visited.length; i++) {
    for (const y of map[i]) {
      if (visited[y] === visited[i]) {
        return false;
      }
    }
  }
  return true;
}
