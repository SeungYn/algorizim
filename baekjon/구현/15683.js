const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(' ').map(Number));

// 0: 북, 1:동, 2: 남, 3: 서
//     0
//  3     1
//     2

const direction = [
  [1, 0],
  [0, 1],
  [-1, 0],
  [0, -1],
];
const cctvLocation = [];
const currentArray = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (map[i][j] != 0 && map[i][j] != 6) cctvLocation.push([i, j, map[i][j]]); // cctv [x, y, 번호]
  }
}

factorial(0, []);
console.log(search(map, currentArray));

// 시시티비 위치 마다 4방향으로 검사를 해줘야함 어떻게 다 검사하지???
// 일단 순열로 방향 세팅
function search(map, orders) {
  let clonedMap = cloneMap(map);
  let leastRestRoom = Infinity;

  for (const order of orders) {
    for (let i = 0; i < order.length; i++) {
      // 방향 만큼 칸을 채움
      const [x, y, num] = cctvLocation[i];
      const dire = order[i];

      if (num === 1) {
        fill(x, y, dire, clonedMap);
      } else if (num === 2) {
        fill(x, y, dire, clonedMap);
        fill(x, y, oppositionSide(dire), clonedMap);
      } else if (num === 3) {
        fill(x, y, dire, clonedMap);
        fill(x, y, rightSide(dire), clonedMap);
      } else if (num === 4) {
        fill(x, y, dire, clonedMap);
        fill(x, y, leftSide(dire), clonedMap);
        fill(x, y, rightSide(dire), clonedMap);
      } else if (num === 5) {
        fill(x, y, dire, clonedMap);
        fill(x, y, oppositionSide(dire), clonedMap);
        fill(x, y, leftSide(dire), clonedMap);
        fill(x, y, rightSide(dire), clonedMap);
      }
    }

    let count = 0;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (clonedMap[i][j] === 0) count++;
      }
    }

    leastRestRoom = Math.min(leastRestRoom, count);
    // console.log(`-----결과:${count}------`);
    // console.log(clonedMap);
    clonedMap = cloneMap(map);
  }

  return leastRestRoom;
}

// 나머지 연산으로 로직 간소화

function leftSide(dire) {
  return (dire + 3) % 4;
}

function rightSide(dire) {
  return (dire + 1) % 4;
}

function oppositionSide(dire) {
  return (dire + 2) % 4;
}

function fill(x, y, dire, map) {
  const [nx, ny] = [x + direction[dire][0], y + direction[dire][1]];

  if (nx < 0 || nx >= n || ny < 0 || ny >= m) return;
  // 벽 이거나 맵 범위를 벗어나면 멈춰야함
  if (map[nx][ny] === 6) return;
  if (!isCCTV(map[nx][ny])) map[nx][ny] = 9;

  fill(nx, ny, dire, map);
}

function factorial(dep, arr) {
  if (dep >= cctvLocation.length) {
    currentArray.push([...arr]);
    return;
  }

  for (let i = 0; i < 4; i++) {
    arr.push(i);
    factorial(dep + 1, arr);
    arr.pop();
  }
}

function isCCTV(num) {
  return [1, 2, 3, 4, 5].includes(num);
}

function cloneMap(map) {
  return map.map((item) => [...item]);
}
