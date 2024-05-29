const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
// 1~25 숫자

const numLocation = {};
const map = input.slice(0, 5).map((line, index) =>
  line.split(' ').map((i, j) => {
    numLocation[Number(i)] = [index, j];
    return [Number(i), false];
  })
);

const numList = input.slice(5).flatMap((line) =>
  line.split(' ').map((i, j) => {
    return Number(i);
  })
);

for (let i = 0; i < numList.length; i++) {
  const nowNum = numList[i];
  const [x, y] = numLocation[nowNum];
  map[x][y][1] = true;

  if (checkBingo(map) >= 3) {
    console.log(i + 1);
    return;
  }
}

function checkBingo(map) {
  let count = 0;

  // 가로 빙고 체크
  for (let i = 0; i < 5; i++) {
    let success = true;

    for (let j = 0; j < 5; j++) {
      if (!map[i][j][1]) {
        success = false;
        break;
      }
    }

    if (success) count++;
  }

  // 세로 빙고 체크
  for (let i = 0; i < 5; i++) {
    let success = true;

    for (let j = 0; j < 5; j++) {
      if (!map[j][i][1]) {
        success = false;
        break;
      }
    }

    if (success) count++;
  }

  // 대각선 체크

  let x = -1,
    y = -1;
  let success = true;
  for (let i = 0; i < 5; i++) {
    (x += 1), (y += 1);
    if (!map[x][y][1]) {
      success = false;
      break;
    }
  }

  if (success) count++;

  (x = 5), (y = -1);
  success = true;
  for (let i = 0; i < 5; i++) {
    (x -= 1), (y += 1);
    if (!map[x][y][1]) {
      success = false;
      break;
    }
  }

  if (success) count++;

  return count;
}
