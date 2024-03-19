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
const list = input.slice(1, input.length - 1);
const [a, b] = input[input.length - 1].split(' ').map(Number);
const map = Array.from({ length: n + 1 }, () => new Array());
let distance = new Array(n + 1).fill(Infinity);

for (const line of list) {
  const [a, b, c] = line.split(' ').map(Number);
  // 정점, 거리
  map[a].push([b, c]);
  map[b].push([a, c]);
}

distance = new Array(n + 1).fill(Infinity);
dijkstra(1);
let distance1ToA = distance[a];
let distance1ToB = distance[b];

distance = new Array(n + 1).fill(Infinity);
dijkstra(a);
let distanceAToB = distance[b];
let distanceAToN = distance[n];

distance = new Array(n + 1).fill(Infinity);
dijkstra(b);
let distanceBToA = distance[a];
let distanceBToN = distance[n];

const route1 = distance1ToA + distanceAToB + distanceBToN;
const route2 = distance1ToB + distanceBToA + distanceAToN;
const result = Math.min(route1, route2);

if (result >= Infinity) return console.log(-1);
else console.log(result);

function dijkstra(a) {
  const q = new PriorityQueue();
  q.enqueue({ num: a, val: 0 });
  distance[a] = 0;

  while (q.values.length) {
    const { num, val } = q.dequeue();
    if (val > distance[num]) continue;

    for (let [next, dist] of map[num]) {
      const nextDist = dist + val;

      if (nextDist < distance[next]) {
        q.enqueue({ num: next, val: nextDist });
        distance[next] = nextDist;
      }
    }
  }
}
