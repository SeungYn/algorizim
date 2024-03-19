class PriorityQueue {
  values;
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    this.bubbleUp();
    return;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parent = this.values[parentIndex];
      if (parent.val <= currentNode.val) break;
      this.values[parentIndex] = currentNode;
      this.values[currentIndex] = parent;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return min;
  }

  sinkDown() {
    let currentNode = this.values[0];
    let currentIndex = 0;
    let len = this.values.length;

    while (true) {
      const leftChildIndex = currentIndex * 2 + 1;
      const rightChildIndex = currentIndex * 2 + 2;
      let leftChild, rightChild;
      let swap = null;

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
          (swap !== null && leftChild.val > rightChild.val)
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

const q = new PriorityQueue();
let distance = Array.from({ length: n + 1 }, () => [Infinity, 0]);
q.enqueue({ num: 1, val: 0 });
distance[1][0] = 0;
let ct = 0;
while (q.values.length > 0) {
  const { num, val } = q.dequeue();
  if (distance[num][0] < val) continue;

  for (let [next, cost] of graph[num]) {
    if (cost + val < distance[next][0]) {
      distance[next][0] = cost + val;
      distance[next][1] = num;
      q.enqueue({ num: next, val: cost + val });
      ct++;
    }
  }
  console.log(num);
}
console.log(ct, 'ct');
for (let i = 1; i <= 7; i++) {
  console.log(getPath(i).reverse().join('->'));
}

function getPath(node) {
  const path = [node];
  while (node !== 1) {
    path.push(distance[node][1]);
    node = distance[node][1];
  }

  return path;
}
