console.time('label'); // 시간 측정 시작
const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [r, c] = input[0].split(' ').map(Number);
const alphabets = new Map(
  new Array(26).fill().map((_, i) => [String.fromCharCode(i + 65), 0])
);

const map = input.slice(1);
let answer = 0;
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

alphabets.set(map[0][0], 1);
dfs(0, 0, 1);
console.log(answer);

function dfs(x, y, cnt) {
  answer = Math.max(answer, cnt);
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
    if (alphabets.get(map[nx][ny]) === 1) continue;

    alphabets.set(map[nx][ny], 1);
    dfs(nx, ny, cnt + 1);
    alphabets.set(map[nx][ny], 0);
  }
}
console.timeEnd('label'); // 시간 측정 종료 및 출력
// const fs = require('fs');
// const file = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const input = fs.readFileSync(file).toString().trim().split('\n');

// const [r, c] = input[0].split(' ').map(Number);
// const arr = [];
// for (let i = 1; i <= r; i++) arr.push(input[i]);

// const dx = [0, 0, 1, -1];
// const dy = [1, -1, 0, 0];
// const visited = new Array(26).fill(false);
// let maxDepth = 0;

// function dfs(depth, x, y) {
//   maxDepth = Math.max(maxDepth, depth);
//   for (let i = 0; i < 4; i++) {
//     const nx = x + dx[i];
//     const ny = y + dy[i];
//     if (nx < 0 || nx >= r || ny < 0 || ny >= c) continue;
//     if (visited[arr[nx][ny].charCodeAt() - 65]) continue;
//     visited[arr[nx][ny].charCodeAt() - 65] = true;
//     dfs(depth + 1, nx, ny);
//     visited[arr[nx][ny].charCodeAt() - 65] = false;
//   }
// }

// visited[arr[0][0].charCodeAt() - 65] = true;
// dfs(1, 0, 0);

// console.log(maxDepth);
