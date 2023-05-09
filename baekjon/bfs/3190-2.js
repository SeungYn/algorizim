const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const n = +input[0];
const k = +input[1];
const l = +input[k + 2];
const graph = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
const directions = [];

for (let i = 0; i < k; i++) {
  const [x, y] = input[i + 2].split(' ').map(Number);
  graph[x][y] = 2;
}

for (let i = 0; i < l; i++) {
  const [s, d] = input[i + k + 3].split(' ').map((k) => (isNaN(k) ? k : +k));
  directions.push([s, d]);
}

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

const head = [[1, 1]];
let time = 0;
let dirIndex = 0;
let currentDirection = 1;
let allSnakePositions = [[1, 1]];

while (head.length > 0) {
  const [x, y] = head.shift();

  const nx = dx[currentDirection] + x;
  const ny = dy[currentDirection] + y;

  if (nx < 1 || nx > n || ny < 1 || ny > n || graph[nx][ny] === 1) {
    console.log(time + 1);
    break;
  }

  if (graph[nx][ny] === 2) {
    graph[nx][ny] = 1;
    allSnakePositions.push([nx, ny]);
  } else {
    graph[nx][ny] = 1;
    allSnakePositions.push([nx, ny]);
    const [tx, ty] = allSnakePositions.shift();
    graph[tx][ty] = 0;
  }
  head.push([nx, ny]);
  time++;

  if (dirIndex < l && time === directions[dirIndex][0]) {
    currentDirection = translateDirection(
      directions[dirIndex][1],
      currentDirection
    );
    dirIndex++;
  }
}

function translateDirection(direction, currentDirection) {
  let cDir = currentDirection;
  if (direction === 'D') {
    cDir = (cDir + 1) % 4;
  }
  if (direction === 'L') {
    cDir -= 1;
    if (cDir < 0) cDir = 3;
  }
  return cDir;
}
