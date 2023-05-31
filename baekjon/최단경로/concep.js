class PriorityQueue {
  values;
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUP();
    return true;
  }

  bubbleUP() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parent = this.values[parentIndex];
      if (parent.val >= currentNode.val) break;
      this.values[parentIndex] = currentNode;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }

  sinkDown() {
    let currentIndex = 0;
    let currentNode = this.values[0];
    let len = this.values.length;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let swap = null;

      if (leftChildIndex < len) {
        const leftChild = this.values[leftChildIndex];
        if (leftChild.val > currentNode.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < len) {
        const rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.val > this.currentNode.val) ||
          (swap !== null && rightChild.val > leftChild.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (!swap) break;

      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentNode;
      currentIndex = swap;
    }
  }
}

const n = 7;
let graph = [
  [],
  [
    [2, 3],
    [3, 1],
    [4, 2],
  ],
  [
    [1, 3],
    [3, 1],
    [5, 1],
  ],
  [
    [1, 1],
    [2, 1],
    [4, 3],
    [6, 5],
  ],
  [
    [1, 2],
    [3, 3],
    [7, 1],
  ],
  [
    [2, 1],
    [6, 2],
  ],
  [
    [3, 5],
    [5, 2],
  ],
  [[4, 1]],
];

function dijkstra(start) {
  let pq = new PriorityQueue();
  pq.enqueue({ num: start, val: 0 });
  distance[start] = 0;
  let ct = 0;
  while (pq.values.length > 0) {
    ct++;
    const { num, val } = pq.dequeue();

    //if (distance[num] < val) continue;
    for (let [next, cost] of graph[num]) {
      if (cost + val < distance[next]) {
        distance[next] = cost + val;
        pq.enqueue({ num: next, val: cost + val });
      }
    }
  }
  console.log(ct);
}

let distance = new Array(n + 1).fill(Infinity);

dijkstra(1);
console.log(distance);
