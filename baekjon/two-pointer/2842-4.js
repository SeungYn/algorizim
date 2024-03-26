const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

const map = input.slice(1, n + 1).map((str) => str.split(''));
const dist = input
  .slice(n + 1, 2 * n + 1)
  .map((str) => str.split(' ').map(Number));

const dx = [0, -1, -1, -1, 0, 1, 1, 1];
const dy = [-1, -1, 0, 1, 1, 1, 0, -1];
let startX, startY;
let homeCnt = 0;

let visited = Array.from({ length: n }, () => new Array(n).fill(false));
let cnt = 0;
const set = new Set();
let result = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    set.add(dist[i][j]);
    if (map[i][j] === 'P') {
      startX = i;
      startY = j;
    } else if (map[i][j] === 'K') {
      homeCnt++;
    }
  }
}

const distRange = Array.from(set.values());
distRange.sort((a, b) => a - b);
let start = 0,
  end,
  middle;

for (let i = 0; i < distRange.length; i++) {
  if (distRange[i] === dist[startX][startY]) {
    end = i;
    middle = i;
  }
}

function dfs(x, y) {
  visited[x][y] = true;
  if (cnt === homeCnt) return;

  for (let i = 0; i < 8; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
    if (
      !visited[nx][ny] &&
      dist[nx][ny] <= distRange[end] &&
      dist[nx][ny] >= distRange[start]
    ) {
      if (map[nx][ny] === 'K') cnt++;

      dfs(nx, ny);
    }
  }
}
while (end < distRange.length) {
  cnt = 0;
  visited = Array.from({ length: n }, () => new Array(n).fill(false));

  dfs(startX, startY);
  //console.log(cnt, homeCnt, start, end, distRange);
  if (cnt === homeCnt) {
    result = Math.min(result, distRange[end] - distRange[start]);
  } else if (cnt < homeCnt) {
    end++;
  }

  if (cnt >= homeCnt) start++;
  if (start > middle) break;
}

console.log(result);

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val) {
    this.values.push(val);
    if (this.values.length > 1) {
      this.bubbleUp();
    }
  }

  bubbleUp() {
    let currentIndex = this.values.length - 1;
    const currentNode = this.values[currentIndex];
    while (currentIndex > 0) {
      const parentIndex = parseInt((currentIndex - 1) / 2);
      const parentNode = this.values[parentIndex];

      if (parentNode.val < currentNode.val) return;

      this.values[currentIndex] = parentNode;
      this.values[parentIndex] = currentNode;
      currentIndex = parentIndex;
    }
  }

  dequeue() {
    const deleteNode = this.values[0];
    const node = this.values.pop();

    if (this.values.length > 1) {
      this.values[0] = node;
      this.sinkDown();
    }

    return deleteNode;
  }

  sinkDown() {
    const len = this.values.length - 1;
    let currentIndex = 0;
    const currentNode = this.values[0];

    while (currentIndex < len) {
      let leftChildIndex = currentIndex * 2 + 1;
      let rightChildIndex = currentIndex * 2 + 2;
      let leftChild,
        rightChild,
        swap = null;

      if (leftChildIndex <= len) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.val < currentNode.val) {
          swap = leftChildIndex;
        }
      }

      if (rightChildIndex <= len) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap !== null && leftChild.val > rightChild.val) ||
          (swap === null && rightChild.val < currentNode.val)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) return;
      this.values[currentIndex] = this.values[swap];
      this.values[swap] = currentNode;
      currentIndex = swap;
    }
  }
}
