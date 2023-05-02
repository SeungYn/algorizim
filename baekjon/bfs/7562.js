const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const totalCase = +input[0];
let currentCase = 0;
let line = 1;

const path = [
  [-2, 1],
  [-1, 2],
  [-2, -1],
  [-1, -2],
  [2, 1],
  [1, 2],
  [2, -1],
  [1, -2],
];

while (currentCase < totalCase) {
  let l = +input[line];
  let currentPosition = input[line + 1].split(' ').map(Number);
  let targetPosition = input[line + 2].split(' ').map(Number);
  let visited = Array.from({ length: l }, () => new Array(l).fill(0));

  const q = [currentPosition];
  let success = false;
  while (q.length > 0) {
    const [x, y] = q.shift();
    if (x === targetPosition[0] && y === targetPosition[1]) {
      console.log(visited[x][y]);
      success = true;
      break;
    }

    for (let [dx, dy] of path) {
      const nx = dx + x;
      const ny = dy + y;

      if (nx < 0 || nx >= l || ny < 0 || ny >= l) continue;
      if (visited[nx][ny] === 0) {
        q.push([nx, ny]);
        visited[nx][ny] = visited[x][y] + 1;
      }
    }
  }

  if (!success) console.log(0);
  line += 3;
  currentCase++;
}
