const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((i) => i.split(' ').map(Number));

const max = Math.max(...map.flatMap((i) => i));

// const list = [
//   [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//   ],
//   [
//     [1, 0],
//     [2, 0],
//     [3, 0],
//   ], // | 회전
//   [
//     [0, 1],
//     [1, 0],
//     [1, 1],
//   ], // ㅁ
//   [
//     [1, 0],
//     [2, 0],
//     [2, 1],
//   ],
//   [
//     [0, 1],
//     [0, 2],
//     [1, 0],
//   ],
//   [
//     [0, 1],
//     [1, 1],
//     [2, 1],
//   ],
//   [
//     [0, 1],
//     [0, 2],
//     [-1, 2],
//   ], // ㄴ 회전
//   [
//     [0, 1],
//     [-1, 1],
//     [-2, 1],
//   ],
//   [
//     [1, 0],
//     [1, 1],
//     [1, 2],
//   ],
//   [
//     [0, 1],
//     [1, 0],
//     [2, 0],
//   ],
//   [
//     [0, 1],
//     [0, 2],
//     [1, 2],
//   ], // ㄴ 대칭
//   [
//     [1, 0],
//     [1, 1],
//     [2, 1],
//   ],
//   [
//     [0, 1],
//     [-1, 1],
//     [-1, 2],
//   ], // ㄹ 회전
//   [
//     [1, 0],
//     [0, 1],
//     [-1, 1],
//   ],
//   [
//     [0, 1],
//     [1, 1],
//     [1, 2],
//   ], // ㄹ 대칭
//   [
//     [0, 1],
//     [0, 2],
//     [1, 1],
//   ],
//   [
//     [-1, 1],
//     [0, 1],
//     [1, 1],
//   ],
//   [
//     [0, 1],
//     [0, 2],
//     [-1, 1],
//   ],
//   [
//     [1, 0],
//     [2, 0],
//     [1, 1],
//   ], // ㅏ 회전
// ];

// let result = 0;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     for (let pos of tet) {
//       const sm = cal(i, j, pos);
//       result = Math.max(result, sm);
//     }
//   }
// }

// console.log(result);

// function cal(i, j, pos) {
//   let sm = map[i][j]; // 기준값을 저장, 나머지는 범위내면 의미 있음.
//   for (let [di, dj] of pos) {
//     const [ni, nj] = [i + di, j + dj];
//     if (ni < 0 || ni >= n || nj < 0 || nj >= m) return 0;
//     sm += map[ni][nj];
//   }

//   return sm;
// }

let result = 0;
const visited = Array.from({ length: n }, () => new Array(m).fill(0));
let count = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    visited[i][j] = 1;

    dfs(1, map[i][j], [[i, j]]);
    visited[i][j] = 0;
  }
}
console.log(result);

function dfs(dep, sm, tlst) {
  if (sm + (4 - dep) * max < result) return;
  if (dep === 4) {
    result = Math.max(result, sm);

    return;
  }

  for (let [ci, cj] of tlst) {
    for (let [di, dj] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]) {
      let [ni, nj] = [ci + di, cj + dj];

      if (ni >= 0 && ni < n && nj >= 0 && nj < m && visited[ni][nj] === 0) {
        //console.log(ni, nj, visited[ni][nj]);
        visited[ni][nj] = 1;
        //tlst.push([ni, nj]);
        dfs(dep + 1, sm + map[ni][nj], [...tlst, [ni, nj]]);
        visited[ni][nj] = 0;
        //tlst.pop();
      }
    }
  }
}

// const list = [
//   [
//     [0, 1],
//     [0, 2],
//     [0, 3],
//   ],
//   [
//     [1, 0],
//     [2, 0],
//     [3, 0],
//   ], // | 모양 회전
//   [
//     [0, 1],
//     [1, 0],
//     [1, 1],
//   ], // ㅁ 모양 회전
//   [
//     [0, -1],
//     [-1, -1],
//     [-2, -1],
//   ],
//   [
//     [-1, 0],
//     [-1, 1],
//     [-1, 2],
//   ],
//   [
//     [0, 1],
//     [1, 1],
//     [2, 1],
//   ],
//   [
//     [1, 0],
//     [1, -1],
//     [1, -2],
//   ], // ㄴ 모양 회전
//   [
//     [0, 1],
//     [-1, 1],
//     [-2, 1],
//   ],
//   [
//     [1, 0],
//     [1, 1],
//     [1, 2],
//   ],
//   [
//     [0, -1],
//     [1, -1],
//     [2, -1],
//   ],
//   [
//     [-1, 0],
//     [-1, -1],
//     [-1, -2],
//   ], // ㄴ 뒤짚기
//   [
//     [1, 0],
//     [1, 1],
//     [2, 1],
//   ],
//   [
//     [0, 1],
//     [-1, 1],
//     [-1, 2],
//   ],
//   // ㄹ 회전
//   [
//     [-1, 0],
//     [-1, 1],
//     [-2, 1],
//   ],
//   [
//     [0, 1],
//     [1, 1],
//     [1, 2],
//   ],
//   //ㄹ  뒤짚기
//   [
//     [0, 1],
//     [1, 1],
//     [0, 2],
//   ],
//   [
//     [-1, 0],
//     [-1, -1],
//     [-2, 0],
//   ],
//   [
//     [0, 1],
//     [-1, 1],
//     [0, 2],
//   ],
//   [
//     [1, 0],
//     [1, 1],
//     [2, 0],
//   ],
// ];
// let result = 0;
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     for (let t of list) {
//       let sum = map[i][j];

//       for (let [dx, dy] of t) {
//         const [nx, ny] = [dx + i, dy + j];
//         if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
//         sum += map[nx][ny];
//       }

//       result = Math.max(sum, result);
//     }
//   }
// }

// console.log(result);

// let visited = Array.from({ length: n }, () => new Array(m).fill(false));
// let result = 0;

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < m; j++) {
//     visited[i][j] = true;
//     dfs(1, map[i][j], [[i, j]]);
//     visited[i][j] = false;
//   }
// }

// console.log(result);

// function dfs(dep, v, list) {
//   if (dep === 4) {
//     result = Math.max(result, v);
//     return;
//   }

//   for (let [x, y] of list) {
//     for (let [dx, dy] of [
//       [-1, 0],
//       [1, 0],
//       [0, -1],
//       [0, 1],
//     ]) {
//       const [nx, ny] = [dx + x, dy + y];

//       if (nx < 0 || nx >= n || ny < 0 || ny >= m || visited[nx][ny]) continue;
//       visited[nx][ny] = true;
//       dfs(dep + 1, v + map[nx][ny], [...list, [nx, ny]]);
//       visited[nx][ny] = false;
//     }
//   }
// }
