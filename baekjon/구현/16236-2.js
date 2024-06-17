const fs = require('fs');

const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
// x, y, size, food
let shark = [0, 0, 2, 0];
let visited = null;

const list = input.slice(1).map((line, i) => {
  const res = line.split(' ').map((v, j) => {
    if (+v === 9) {
      shark[0] = i;
      shark[1] = j;
    }
    return +v;
  });
  return res;
});

list[shark[0]][shark[1]] = 0;

let result = 0;
while (true) {
  bfs();
  console.log(visited);
  const res = check();
  console.log(res);
  if (!res) {
    console.log(result);
    break;
  }
  const [x, y] = res;
  result += visited[x][y];
  shark[0] = x;
  shark[1] = y;
  shark[3] += 1;
  list[x][y] = 0;

  if (shark[3] >= shark[2]) {
    shark[2] += 1;
    shark[3] = 0;
  }
}

function bfs() {
  const [sx, sy, size, food] = shark;

  visited = Array.from({ length: n }, () => new Array(n).fill(-1));
  visited[sx][sy] = 0;
  const q = [[sx, sy, 0]];

  while (q.length > 0) {
    const [x, y, dist] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + x, dy[i] + y];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (visited[nx][ny] !== -1) continue;
      if (size < list[nx][ny]) continue;

      visited[nx][ny] = dist + 1;
      q.push([nx, ny, dist + 1]);
    }
  }
}

// 먹을 수 있는 먹이 최단 경로 위치
function check() {
  let minDist = Infinity;
  let x = 0,
    y = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (minDist > visited[i][j] && list[i][j] < shark[2] && list[i][j] >= 1) {
        minDist = visited[i][j];
        x = i;
        y = j;
      }
    }
  }

  if (minDist === Infinity) return null;
  return [x, y];
}
