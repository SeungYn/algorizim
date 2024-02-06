const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

let testCase = +input[0];
let index = 1;
const dx = [-2, -1, 1, 2, -1, -2, 1, 2];
const dy = [1, 2, 2, 1, -2, -1, -2, -1];

while (testCase--) {
  const n = +input[index];
  const [x, y] = input[index + 1].split(' ').map(Number);
  const [targetX, targetY] = input[index + 2].split(' ').map(Number);

  const queue = [[x, y, 0]];
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));
  visited[x][y] = true;

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    if (x === targetX && y === targetY) {
      console.log(dist);
      break;
    }

    for (let i = 0; i < 8; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (visited[nx][ny]) continue;

      visited[nx][ny] = true;
      queue.push([nx, ny, dist + 1]);
    }
  }

  index += 3;
}
