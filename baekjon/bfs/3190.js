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

const apples = [];
const directionsTranslate = [];

const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];

let currentDirection = 1;
let currentPositions = [];

for (let i = 2; i < k + 2; i++) {
  const line = input[i].split(' ').map(Number);
  apples.push(line);
}
apples.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

for (let i = k + 3; i < 3 + k + l; i++) {
  const line = input[i].split(' ').map((i) => {
    return isNaN(i) ? i : +i;
  });
  directionsTranslate.push(line);
}
let state = true;
let dirIndex = 0;
let appleIndex = 0;
// 현재 머리 위치
const q = [[1, 1]];
let second = 0;
currentPositions.push('11');

while (q.length > 0) {
  const [x, y] = q.shift();

  const nx = x + dx[currentDirection];
  const ny = y + dy[currentDirection];

  // 위치 이탈 또는 몸이랑 안부딪혔는지
  if (
    nx < 1 ||
    nx > n ||
    ny < 1 ||
    ny > n ||
    currentPositions.includes(nx + '' + ny)
  ) {
    second += 1;
    break;
  }

  // 머리 이동
  currentPositions.push(nx + '' + ny);
  //꼬리 이동
  if (
    appleIndex < k &&
    apples[appleIndex][0] === nx &&
    apples[appleIndex][1] === ny
  ) {
    appleIndex++;
  } else {
    currentPositions.shift();
  }
  q.push([nx, ny]);
  second += 1;
  // 방향전환
  if (dirIndex < l && directionsTranslate[dirIndex][0] === second) {
    currentDirection = translateDirection(
      directionsTranslate[dirIndex][1],
      currentDirection
    );

    dirIndex++;
  }
  console.log(currentPositions);
}

console.log(second);

function translateDirection(dir, currentDir) {
  let cDir = currentDir;
  if (dir === 'D') {
    cDir += 1;
    cDir %= 4;
  }
  if (dir === 'L') {
    cDir -= 1;
    if (cDir < 0) cDir = 3;
  }
  return cDir;
}
