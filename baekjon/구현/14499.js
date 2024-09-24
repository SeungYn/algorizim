const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

let [n, m, x, y, k] = input[0].split(' ').map(Number);
const map = input.slice(1, n + 1).map((l) => l.split(' ').map(Number));
const commands = input.at(-1).split(' ').map(Number);

let dice = [0, 0, 0, 0, 0, 0];
let currentDiceFloorIndex = 3;
const dx = [0, 0, 0, -1, 1];
const dy = [0, 1, -1, 0, 0];

// 주사위가 왼쪽, 오른쪽으로 이동할 때만 현재 주사위 값들을 갱신시키면 됨.
// 명령들 방향 1: 동, 2:서, 북: 3, 남: 4

for (let c of commands) {
  const [nx, ny] = [x + dx[c], y + dy[c]];
  if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
  [x, y] = [nx, ny];
  let tempDice = [...dice];
  // 북, 남으로 이동할 때
  if (c === 4) {
    dice[0] = tempDice[1];
    dice[1] = tempDice[2];
    dice[2] = tempDice[3];
    dice[3] = tempDice[0];
    dice[4] = tempDice[4];
    dice[5] = tempDice[5];
  } else if (c === 3) {
    dice[0] = tempDice[3];
    dice[1] = tempDice[0];
    dice[2] = tempDice[1];
    dice[3] = tempDice[2];
    dice[4] = tempDice[4];
    dice[5] = tempDice[5];
  } else if (c === 2) {
    dice[0] = tempDice[0];
    dice[1] = tempDice[4];
    dice[2] = tempDice[2];
    dice[3] = tempDice[5];
    dice[4] = tempDice[3];
    dice[5] = tempDice[1];
  } else if (c === 1) {
    dice[0] = tempDice[0];
    dice[1] = tempDice[5];
    dice[2] = tempDice[2];
    dice[3] = tempDice[4];
    dice[4] = tempDice[1];
    dice[5] = tempDice[3];
  }

  if (map[x][y] === 0) {
    map[x][y] = dice[1];
  } else {
    dice[1] = map[x][y];
    map[x][y] = 0;
  }

  console.log(dice[3]);
}
