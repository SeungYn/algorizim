/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */

class PriorityQueue {
  values;
  constructor() {
    this.values = [];
  }

  enqueue(el) {
    this.values.push(el);
    this.bubbleUp();
    return;
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];

    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode.val <= currentNode.val) break;

      this.values[currentIndex] = parentNode;
      this.values[parentIndex] = currentNode;
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
      let swap;

      if (leftChildIndex < len) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.val < currentNode.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap !== null && rightChild.val < leftChild.val) ||
          (swap === null && rightChild.val < currentNode.val)
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

var findCheapestPrice = function (n, flights, src, dst, k) {
  const graph = Array.from({ length: n }, () => []);
  const distance = new Array(n).fill(Infinity);
  const visited = new Array(n).fill(Infinity);
  const results = [];
  for (let [f, t, d] of flights) {
    graph[f].push([t, d]);
  }
  let result = dijkstra(src);
  console.log(result);
  console.log(distance);

  function dijkstra(start) {
    const q = new PriorityQueue();
    q.enqueue({ val: 0, node: start, d: -1 });

    while (q.values.length > 0) {
      const { val, node, d } = q.dequeue();

      if (node === dst) return val;
      if (d >= k) continue;

      const nextD = d + 1;

      for (let [next, dist] of graph[node]) {
        console.log({
          node,
          val,
          next,
          dist,
          nextD,
        });

        if (
          visited[next] === Infinity ||
          //nextD < visited[next]
          (nextD <= k && dist + val <= distance[next])
        ) {
          distance[next] = dist + val;
          visited[node] = nextD;
          console.log('enqueue::', q);
          q.enqueue({ val: dist + val, node: next, d: nextD });
        }
        console.log(distance.map((v) => (v === Infinity ? -7 : v)).join(', '));
        console.log(visited.map((v) => (v === Infinity ? -7 : v)).join(', '));
      }
    }

    return -1;
  }
};

console.log(
  findCheapestPrice(
    11,
    [
      [0, 3, 3],
      [3, 4, 3],
      [4, 1, 3],
      [0, 5, 1],
      [5, 1, 100],
      [0, 6, 2],
      [6, 1, 100],
      [0, 7, 1],
      [7, 8, 1],
      [8, 9, 1],
      [9, 1, 1],
      [1, 10, 1],
      [10, 2, 1],
      [1, 2, 100],
    ],
    0,
    2,
    4
  )
);
console.log('end');
