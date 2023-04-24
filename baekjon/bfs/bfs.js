class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}
class Queue {
  size = 0;
  tail = null;
  head = null;

  constructor() {}

  enqueue(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
    return this;
  }

  dequeue() {
    if (this.size === 0) throw new Error('큐가 비어있습니다.');
    const deleteNode = this.head;
    this.head = this.head.next;
    this.size--;
    return deleteNode.value;
  }
}

const queue = new Queue();

const graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

console.log(graph);

const visited = new Array(9).fill(false);

function bfs(graph, start, visited) {
  visited[start] = true;
  const queue = new Queue();
  queue.enqueue(start);

  while (queue.size > 0) {
    const currentNode = queue.dequeue();
    let list = graph[currentNode];
    for (const node of list) {
      if (!visited[node]) {
        queue.enqueue(node);
        visited[node] = true;
      }
    }
  }
}

bfs(graph, 1, visited);
console.log(visited);
