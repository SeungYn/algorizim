'use strict';

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
let sharkX,
  sharkY,
  sharkSize = 2,
  answer = 0,
  food = 0;
const dx = [0, -1, 0, 1];
const dy = [-1, 0, 1, 0];
let visited = null;

const list = input.slice(1).map((line, i) => {
  const ls = line.split(' ').map((v, j) => {
    if (+v === 9) {
      sharkX = i;
      sharkY = j;
      return 0;
    }
    return Number(v);
  });

  return ls;
});

while (true) {
  bfs();

  const result = check();

  if (!result) {
    console.log(answer);
    break;
  } else {
    sharkX = result[0];
    sharkY = result[1];

    answer += result[2];
    list[sharkX][sharkY] = 0;
    food += 1;
  }

  if (food >= sharkSize) {
    sharkSize += 1;
    food = 0;
  }
}

function bfs() {
  visited = Array.from({ length: n }, () => new Array(n).fill(-1));
  visited[sharkX][sharkY] = 0;
  const q = [[sharkX, sharkY]];

  while (q.length > 0) {
    const [x, y] = q.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
      if (list[nx][ny] > sharkSize) continue;
      if (visited[nx][ny] !== -1) continue;

      visited[nx][ny] = visited[x][y] + 1;
      q.push([nx, ny]);
    }
  }
}

function check() {
  let x = 0,
    y = 0;
  let minDist = Infinity;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] !== -1 && list[i][j] < sharkSize && list[i][j] >= 1) {
        if (minDist > visited[i][j]) {
          x = i;
          y = j;

          minDist = visited[i][j];
        }
      }
    }
  }

  if (minDist === Infinity) return false;

  return [x, y, minDist];
}

// bfs();
// console.log(list);
// console.log('finish');
// function bfs() {
//   // bfs를 돌다가 조건에 맞게 먹기 그리고 거리 저장
//   const q = [[sharkX, sharkY, 0, 2]];

//   while (q.length > 0) {
//     //console.log(q);
//     const [x, y, d, s] = q.shift();

//     if (!fishCheck(s)) {
//       // 먹을 수 있는 물고기가 없으면 종료
//       console.log(x, y, d, s);
//       return;
//     }

//     const isEatFishNear = nearFishCheck(x, y, s);

//     for (let i = 0; i < 4; i++) {
//       const [nx, ny] = [x + dx[i], y + dy[i]];

//       if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
//       if (list[nx][ny] > s) continue;
//       if (!isEatFishNear) {
//         // 근처에 먹을 수 있는 물고기가 없으면 그냥 이동
//         if (list[nx][ny] === s) {
//           q.push([nx, ny, d + 1, s]);
//         } else if (list[nx][ny] === 0) {
//           q.push([nx, ny, d + 1, s]);
//           list[nx][ny] = 9;
//           list[x][y] = 0;
//         }

//         console.log(list);
//         break;
//       }
//       if (list[nx][ny] !== 0 && isEatFishNear) {
//         q.push([nx, ny, d + 1, s + list[nx][ny]]);
//         list[nx][ny] = 9;
//         list[x][y] = 0;

//         console.log(list);
//         break;
//       }
//     }
//   }
// }

// function nearFishCheck(x, y, s) {
//   // 근처에 먹을 수 있는 물고기 체크

//   for (let i = 0; i < 4; i++) {
//     const [nx, ny] = [x + dx[i], y + dy[i]];

//     if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;
//     if (list[nx][ny] >= s) continue;
//     if (list[nx][ny] !== 0 && list[nx][ny] < s) return true;
//   }

//   return false;
// }

// function fishCheck(sharkSize) {
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (list[i][j] !== 0 && list[i][j] !== 9) {
//         if (list[i][j] < sharkSize) return true;
//       }
//     }
//   }

//   return false;
// }

/**
 * 아기 상어는 큰 물고기는 못 먹지만 나머지는 지나갈 수 있음
 * 크기가 작으면 먹을 수 있고 같으면 못 먹음
 */
