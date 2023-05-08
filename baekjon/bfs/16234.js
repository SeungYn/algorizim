const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, l, r] = input[0].split(' ').map(Number);
const arr = [];
let visited = null;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < n; i++) {
  arr.push(input[i + 1].split(' ').map(Number));
}

let result = 0;

while (true) {
  flag = false;
  visited = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (visited[i][j] === 1) continue;
      if (bfs(i, j)) {
        flag = true;
      }
    }
  }

  if (!flag) break;
  result++;
}

console.log(result);

function bfs(x, y) {
  const q = [[x, y]];
  const possibleCountry = [[x, y]];
  visited[x][y] = 1;
  let possible = false;
  while (q.length > 0) {
    const [cx, cy] = q.shift();

    for (let i = 0; i < 4; i++) {
      const nx = dx[i] + cx;
      const ny = dy[i] + cy;

      if (!arr[nx] || !arr[nx][ny]) continue;
      if (visited[nx][ny]) continue;

      const difference = Math.abs(arr[cx][cy] - arr[nx][ny]);

      //차이가 조건에 맞다면 인구이동 가능한 배열에 넣기

      if (l <= difference && difference <= r) {
        //console.log(arr[cx][cy], arr[nx][ny], difference);
        //console.log([cx, cy], [nx, ny], [arr[cx][cy], arr[nx][ny], difference]);

        possibleCountry.push([nx, ny]);

        possible = true;
        visited[nx][ny] = 1;
        q.push([nx, ny]);
      }
    }
  }

  if (!possible) return false;

  const sum = possibleCountry.reduce((p, [x, y]) => p + arr[x][y], 0);
  const countryCount = possibleCountry.length;
  const movementResult = parseInt(sum / countryCount);

  for (let [px, py] of possibleCountry) {
    arr[px][py] = movementResult;
  }

  return true;
}
