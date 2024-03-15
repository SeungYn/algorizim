class PriorityQueue {
  constructor() {
    this.values = []; // [{num:number, val:number}]
  }

  enquene(val) {
    this.values.push(val);
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

      if (parentNode.val <= currentNode.val) break;

      this.values[parentIndex] = currentNode;
      this.values[currentIndex] = parentNode;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const deleteNode = this.values[0];

    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return deleteNode;
  }

  sinkDown() {
    let currentIndex = 0;
    const currentNode = this.values[0];
    let len = this.values.length;
    while (true) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let leftChild,
        rightChild,
        swap = null;

      if (leftChildIndex < len) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.val < currentNode.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.val < currentNode.val) ||
          (swap !== null && rightChild.val < leftChild.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) return;

      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentNode;
      currentIndex = swap;
    }
  }
}

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [v, e] = input[0].split(' ').map(Number);
const k = +input[1];

const map = Array.from({ length: v + 1 }, () => new Array());
const distance = Array.from({ length: v + 1 }, () => Infinity);

const list = input.slice(2);
// map[a] = [[도착 정점, 가중치]]

distance[k] = 0;

for (const line of list) {
  const [a, b, c] = line.split(' ').map(Number);
  map[a].push([b, c]);
}

const q = new PriorityQueue();
q.enquene({ num: k, val: 0 });
while (q.values.length > 0) {
  const { num, val } = q.dequeue();

  if (distance[num] < val) continue;

  for (let [b, c] of map[num]) {
    if (distance[b] > val + c) {
      distance[b] = val + c;
      q.enquene({ num: b, val: val + c });
    }
  }
}

for (let i = 1; i <= v; i++) {
  console.log(distance[i] === Infinity ? 'INF' : distance[i]);
}

const tq = new PriorityQueue();
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
tq.enquene({ num: 0, val: 0 });
console.log(tq);
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.dequeue();
tq.enquene({ num: 0, val: 10 });
tq.enquene({ num: 0, val: 9 });
tq.enquene({ num: 0, val: 8 });
tq.enquene({ num: 0, val: 7 });
tq.enquene({ num: 0, val: 6 });
tq.enquene({ num: 0, val: 5 });
tq.enquene({ num: 0, val: 4 });
tq.enquene({ num: 0, val: 3 });
tq.enquene({ num: 0, val: 2 });
console.log(tq);
tq.dequeue();
console.log(tq);
tq.dequeue();
console.log(tq);
