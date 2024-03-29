const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

class PriorityQueue {
  constructor() {
    // {num, val}
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    let currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode.val < currentNode.val) break;

      this.values[currentIndex] = parentNode;
      this.values[parentIndex] = currentNode;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const deleteNode = this.values[0];
    const node = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = node;
      this.sinkDown();
    }
    return deleteNode;
  }

  sinkDown() {
    let currentIndex = 0;
    let currentNode = this.values[currentIndex];
    let len = this.values.length - 1;

    while (true) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let swap = null,
        rightChildNode,
        leftChildNode;

      if (leftChildIndex <= len) {
        leftChildNode = this.values[leftChildIndex];

        if (leftChildNode.val < currentNode.val) swap = leftChildIndex;
      }

      if (rightChildIndex <= len) {
        rightChildNode = this.values[rightChildIndex];
        if (
          (swap === null && currentNode.val > rightChildNode.val) ||
          (swap !== null && leftChildNode.val > rightChildNode.val)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentNode;
      currentIndex = swap;
    }
  }
}

let [n, m, k] = input[0].split(' ').map(Number);
const list = input.slice(1);
const map = Array.from({ length: n + 1 }, () => new Array());

const distance = Array.from({ length: n + 1 }, () =>
  new Array(k + 1).fill(Infinity)
);

for (let line of list) {
  const [a, b, c] = line.split(' ').map(Number);
  // [노드 ,거리]
  map[a].push([b, c]);
  map[b].push([a, c]);
}

distance[1][0] = 0;
const q = new PriorityQueue();
q.enqueue({ num: 1, val: 0, paved: 0 });

while (q.values.length) {
  const { num: node, val: dist, paved } = q.dequeue();
  console.log(node, dist, paved, distance);
  if (distance[node][paved] < dist) continue;

  for (let [next, nextDist] of map[node]) {
    const dis = nextDist + dist;

    if (distance[next][paved] > dis) {
      distance[next][paved] = dis;
      q.enqueue({ num: next, val: dis, paved });
    }

    //if (paved < k && dist < distance[next][paved + 1]) {
    if (paved < k) {
      distance[next][paved + 1] = dist;
      q.enqueue({ num: next, val: dist, paved: paved + 1 });
    }
  }
}

console.log(distance[n].reduce((a, b) => Math.min(a, b)));
const tq = new PriorityQueue();
