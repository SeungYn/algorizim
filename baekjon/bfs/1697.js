class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  dequeue() {
    if (this.size === 0) throw new Error('큐가 비어있습니다.');

    const deleteNode = this.head;
    this.head = deleteNode.next;
    this.size--;
    if (this.size === 0 && !this.head) this.tail = null;

    return deleteNode.value;
  }
}

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n')[0];

const [n, m] = input.split(' ').map(Number);

const positions = Array.from({ length: m + 2 }).fill(0);

const q = new Queue();
q.enqueue(n);

while (q.size > 0) {
  const now = q.dequeue();

  if (now === m) {
    console.log(positions[now]);
    break;
  }

  if (now - 1 >= 0 && now - 1 < 1000001 && positions[now - 1] === 0) {
    q.enqueue(now - 1);
    positions[now - 1] = positions[now] + 1;
  }
  if (now + 1 >= 0 && now + 1 < 1000001 && positions[now + 1] === 0) {
    q.enqueue(now + 1);
    positions[now + 1] = positions[now] + 1;
  }
  if (now * 2 >= 0 && now * 2 < 1000001 && positions[now * 2] === 0) {
    q.enqueue(now * 2);
    positions[now * 2] = positions[now] + 1;
  }
}
