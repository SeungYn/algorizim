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

let [n, m] = input[0].split(' ').map(Number);
const list = input.slice(1);
const map = Array.from({ length: n + 1 }, () => new Array());

let distance = new Array(n + 1).fill(Infinity);

for (let line of list) {
  const [a, b, c] = line.split(' ').map(Number);
  // [노드 ,거리]
  map[a].push([b, c]);
  map[b].push([a, c]);
}

function dijkstra(a, b) {
  const q = new PriorityQueue();
  distance[1] = 0;
  q.enqueue({ num: 1, val: 0 });

  while (q.values.length) {
    const { num, val } = q.dequeue();

    if (distance[num] < val) continue;

    for (let [next, dist] of map[num]) {
      if (next === b && num === a) continue;
      else if (next === a && num === b) continue;
      const nextDist = val + dist;

      if (distance[next] > nextDist) {
        distance[next] = nextDist;
        q.enqueue({ num: next, val: nextDist });
      }
    }
  }
}

dijkstra(-1, -1);

let removes = bfs();
let result = 0;

for (let [a, b] of removes) {
  distance = new Array(n + 1).fill(Infinity);
  dijkstra(a, b);
  result = Math.max(result, distance[n]);
}
console.log(result);

function bfs() {
  const visited = new Array(n + 1).fill(false);
  const q = [];
  const removes = [];
  q.push(n);
  while (q.length) {
    const num = q.shift();

    if (num === 1) continue;

    for (let [next, val] of map[num]) {
      const nextDist = distance[next] + val;

      if (nextDist === distance[num]) {
        removes.push([next, num]);

        if (!visited[next]) {
          q.push(next);
          visited[next] = true;
        }
      }
    }
  }

  return removes;
}
