class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }

  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }

  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }

  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m, k, x] = input[0].split(' ').map(Number);

const distance = new Array(n + 1).fill(-1);
const graph = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
}

//const q = [[x, 0]];
const q = new Queue();
q.enqueue([x, 0]);
const result = [];
distance[x] = 0;

while (q.getLength() > 0) {
  const [now, dist] = q.dequeue();

  if (dist === k) result.push(now);

  for (let next of graph[now]) {
    if (distance[next] !== -1) continue;
    distance[next] = dist + 1;
    q.enqueue([next, dist + 1]);
  }
}

if (result.length === 0) console.log(-1);
else {
  result.sort((a, b) => a - b);
  result.forEach((a) => console.log(a));
}

// let flag = false;

// for (let i = 1; i <= n; i++) {
//   if (distance[i] === k) {
//     console.log(i);
//     flag = true;
//   }
// }
// if (!flag) console.log(-1);
