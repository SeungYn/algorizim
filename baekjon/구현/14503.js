const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let [r, c, d] = input[1].split(' ').map(Number);
const map = input.slice(2).map((l) => l.split(' ').map(Number));

// 0: 북, 1: 동, 2: 남, 3: 서
// 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
// 현재 칸의 주변
// $4$칸 중 청소되지 않은 빈 칸이 없는 경우,
// 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 돌아간다.
// 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
// 현재 칸의 주변
// $4$칸 중 청소되지 않은 빈 칸이 있는 경우,
// 반시계 방향으로
// $90^\circ$ 회전한다.
// 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
// 1번으로 돌아간다.
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let result = 0;
let count = 0;
while (true) {
  if (map[r][c] === 0) {
    result++;
    map[r][c] = 2;
  }

  let findUnClear = null;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [r + dx[i], c + dy[i]];
    if (
      nx < 0 ||
      nx >= n ||
      ny < 0 ||
      ny >= m ||
      map[nx][ny] === 1 ||
      map[nx][ny] === 2
    )
      continue;
    findUnClear = [nx, ny];
    break;
  }

  // 청소되지 않는 빈 칸이 있는 경우
  if (findUnClear) {
    // 회전
    d -= 1;
    if (d < 0) d = 3;

    const [nx, ny] = [r + dx[d], c + dy[d]];

    if (
      nx < 0 ||
      nx >= n ||
      ny < 0 ||
      ny >= m ||
      map[nx][ny] === 1 ||
      map[nx][ny] === 2
    )
      continue;

    if (map[nx][ny] === 0) {
      r = nx;
      c = ny;
    }
  } else {
    const [nx, ny] = [r - dx[d], c - dy[d]];

    if (nx < 0 || nx >= n || ny < 0 || ny >= m || map[nx][ny] === 1) {
      console.log(result);
      return;
    }
    r = nx;
    c = ny;
  }
}
