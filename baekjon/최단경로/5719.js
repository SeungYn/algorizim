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

  const removes = bfs(start, end, n);

  map = getNewGraph(removes, n);
  distance = new Array(n).fill(Infinity);
  dijkstra(start);
  console.log(distance[end] >= Infinity ? -1 : distance[end]);

  index += m + 2;
}

function getNewGraph(removes, n) {
  const newMap = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) {
    for (let [b, c] of map[i]) {
      let check = true;
      for (let [x, y] of removes) {
        if (i === x && b === y) {
          check = false;
          break;
        }
      }
      if (check) newMap[i].push([b, c]);
    }
  }
  return newMap;
}

function bfs(start, end, n) {
  const q = [];
  const removes = [];
  const visited = new Array(n).fill(false);
  q.push(end);
  visited[end] = true;
  while (q.length) {
    const node = q.shift();
    if (node === start) continue;

    for (let [next, dist] of reveredMap[node]) {
      const nextDist = distance[next] + dist;

      if (nextDist === distance[node]) {
        removes.push([next, node]);

        if (!visited[next]) {
          visited[next] = true;
          q.push(next);
        }
      }
    }
  }

  return removes;
}

function dijkstra(start) {
  const q = new PriorityQueue();
  q.enqueue({ num: start, val: 0 });
  distance[start] = 0;

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
