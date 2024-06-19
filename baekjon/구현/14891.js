const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const gears = [0, ...input.slice(0, 4).map((l) => l.split('').map(Number))];
const n = +input[4];
const list = input.slice(5, 5 + n).map((l) => l.split(' ').map(Number));

// 골라진 톱니 기준 양옆 톱니 고르기
// 2, 6 번째 돌기 부분 체크
// 양옆 극 확인 돌리기 (돌기 위치 변환)
// 기준 톱니 돌리기 (돌기 위치 변환)

for (let [num, directtion] of list) {
  const [fiberLeft, fiberRight] = [gears[num][2], gears[num][6]];
  const state = new Array(5).fill(-1);
  state[num] = directtion;
  //console.log(state);
  gearLeftCheck(num, state);
  gearRightCheck(num, state);

  for (let i = 1; i <= 4; i++) {
    gearRotation(i, state);
  }
  // console.log(state);
  // console.log(gears);

  // 상태 체크 배열로 모든 기어 돌리기
}

let result = 0;

for (let i = 1; i <= 4; i++) {
  if (i === 1 && gears[i][0]) {
    result += 1;
  } else if (i === 2 && gears[i][0]) {
    result += 2;
  } else if (i === 3 && gears[i][0]) {
    result += 4;
  } else if (i === 4 && gears[i][0]) {
    result += 8;
  }
}

console.log(result);

// 이전 기어의 오른쪽과 현재 기어의 왼쪽 돌기를 체크 해서 상태를 최신화
function gearRightCheck(prevGear, state) {
  if (prevGear >= 4) return;
  const currentGear = prevGear + 1;

  if (state[prevGear] === 0) state[currentGear] = 0;
  else if (gears[prevGear][2] === gears[currentGear][6]) state[currentGear] = 0;
  else state[currentGear] = state[prevGear] === 1 ? -1 : 1;

  gearRightCheck(currentGear, state);
}

function gearLeftCheck(prevGear, state) {
  if (prevGear <= 1) return;
  const currentGear = prevGear - 1;

  if (state[prevGear] === 0) state[currentGear] = 0;
  else if (gears[prevGear][6] === gears[currentGear][2]) state[currentGear] = 0;
  else state[currentGear] = state[prevGear] === 1 ? -1 : 1;

  gearLeftCheck(currentGear, state);
}

function gearRotation(num, state) {
  const direction = state[num];

  if (direction === 1) {
    const last = gears[num].at(-1);
    for (let i = 7; i > 0; i--) {
      gears[num][i] = gears[num][i - 1];
    }
    gears[num][0] = last;
  } else if (direction === -1) {
    const first = gears[num][0];
    for (let i = 0; i < 8; i++) {
      gears[num][i] = gears[num][i + 1];
    }
    gears[num][7] = first;
  }
}
