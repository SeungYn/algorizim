function solution(m, n, board) {
  var answer = 0;
  board = [...board.map((s) => [...s])];
  const dx = [
    [-1, -1, 0],
    [0, 1, 1],
    [1, 1, 0],
    [0, -1, -1],
  ];
  const dy = [
    [0, -1, -1],
    [-1, -1, 0],
    [0, 1, 1],
    [1, 1, 0],
  ];
  let count = 0;

  while (true) {
    const checkMap = {};

    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === '1') continue;
        const result = new Set();

        for (let a = 0; a < 4; a++) {
          let blocks = [];
          for (let b = 0; b < 3; b++) {
            const [nx, ny] = [i + dx[a][b], j + dy[a][b]];

            if (nx < 0 || nx >= m || ny < 0 || ny >= n) break;

            if (board[nx][ny] === board[i][j]) blocks.push(`${nx},${ny}`);
            else break;
          }

          if (blocks.length === 3) {
            // 블록 4개가 완성된경우
            for (let coord of blocks) {
              result.add(coord);
            }
          }
        }

        if (result.size > 0) {
          result.add(`${i},${j}`);
        } else continue;

        const successBlock = [...result.values(result)];

        if (checkMap[board[i][j]]) {
          successBlock.forEach((k) => checkMap[board[i][j]].add(k));
        } else {
          checkMap[board[i][j]] = new Set(successBlock);
        }
      }
    }

    const keys = Object.keys(checkMap);

    if (keys.length === 0) break;
    for (let k of keys) {
      // 한판 점수 결산
      answer += checkMap[k].size;

      //블록 제거
      for (let coor of checkMap[k].values()) {
        const [q, w] = coor.split(',').map(Number);
        board[q][w] = '1';
      }
    }

    // 빈칸 채우는 작업

    for (let j = 0; j < n; j++) {
      for (let i = m - 1; i >= 0; i--) {
        if (board[i][j] !== '1') continue;
        const target = findSwitchTarget(i, j, board);

        if (!target) continue;
        //console.log(board[i][j], board[target[0]][target[1]]);
        board[i][j] = board[target[0]][target[1]];
        board[target[0]][target[1]] = '1';
      }
    }

    count++;
  }

  return answer;
}

function findSwitchTarget(x, y, board) {
  const [nx, ny] = [x - 1, y];
  if (nx < 0) return undefined;
  if (board[nx] && board[nx][ny] !== '1') return [nx, ny];
  return findSwitchTarget(nx, ny, board);
}

// 블록이 22인지
// 블록이 22이면 위에 블록들 당겨오기
// 22 판별을 어떻게 하지?
