const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

class Queue {
  constructor() {
    this.start = null;
    this.end = null;
    this.size = 0;
  }

  enqueue(x, y, d) {
    const node = new Node(x, y, d);
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
  constructor(x, y, d) {
    this.x = x;
    this.y = y;
    this.d = d;
    this.next = null;
  }
}

const n = +input[0];

const dx = [-1, -2, -2, -1, 1, 2, 2, 1];
const dy = [-2, -1, 1, 2, 2, 1, -1, -2];

let index = 1;
let result = '';
while (index < input.length) {
  const l = +input[index];
  const [sX, sY] = input[index + 1].split(' ').map(Number);
  const [tX, tY] = input[index + 2].split(' ').map(Number);

  const visited = Array.from({ length: l }, () => new Array(l).fill(0));
  visited[sX][sY] = 0;

  const q = new Queue();
  q.enqueue(sX, sY, 0);
  while (q.size > 0) {
    const { x, y, d } = q.dequeue();

    if (x === tX && y === tY) {
      result += d + '\n';
      break;
    }

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = d + 1;
      q.enqueue(nx, ny, d + 1);
    }
  }

  index += 3;
}

console.log(result);
