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

let index = 0;
let distance;
let map;
let reveredMap;

while (index < input.length - 1) {
  const [n, m] = input[index].split(' ').map(Number);
  const [start, end] = input[index + 1].split(' ').map(Number);
  const list = input.slice(index + 2, index + 2 + m);
  distance = new Array(n).fill(Infinity);
  map = Array.from({ length: n }, () => []);
  reveredMap = Array.from({ length: n }, () => []);
  for (let line of list) {
    const [a, b, c] = line.split(' ').map(Number);
    map[a].push([b, c]);
    reveredMap[b].push([a, c]);
  }

  dijkstra(start);
  const removes = bfs(n, start, end);

  map = getNewMap(removes, n);
  distance = new Array(n).fill(Infinity);
  dijkstra(start);
  console.log(distance[end] >= Infinity ? -1 : distance[end]);
  index += m + 2;
}

function getNewMap(removes, n) {
  const newMap = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (const [next, dist] of map[i]) {
      if (!removes.some(([a, b]) => a === i && b === next)) {
        newMap[i].push([next, dist]);
      }
    }
  }

  return newMap;
}

function dijkstra(start) {
  const q = new PriorityQueue();
  q.enqueue({ num: start, val: 0 });
  distance[start] = 0;
  while (q.values.length) {
    const { num, val } = q.dequeue();
    if (distance[num] < val) continue;

    for (let [next, dist] of map[num]) {
      const nextDist = dist + val;
      if (nextDist < distance[next]) {
        q.enqueue({ num: next, val: nextDist });
        distance[next] = nextDist;
      }
    }
  }
}

function bfs(n, start, end) {
  const removes = [];
  const visited = new Array(n).fill(false);
  const q = [];
  q.push(end);
  visited[end] = true;

  while (q.length) {
    const now = q.shift();

    if (now === start) continue;

    for (let [next, dist] of reveredMap[now]) {
      const nextDist = dist + distance[next];

      if (nextDist === distance[now]) {
        removes.push([next, now]);

        if (!visited[next]) {
          visited[next] = true;
          q.push(next);
        }
      }
    }
  }

  return removes;
}
