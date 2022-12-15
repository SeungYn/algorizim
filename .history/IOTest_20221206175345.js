function solution(m, n, board) {
  var answer = 0;
  for (let i = 0; i < m; i++) {
    board[i] = [...board[i]];
  }
  const set = new Set();
  //일단 내려오는거 없이 다 지워보기
  while (true) {
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        let flag = true;
        for (let a = 0; a < 2; a++) {
          for (let b = 0; b < 2; b++) {
            if (board[i + a][j + b] !== board[i][j] || board[i][j] === 0) {
              flag = false;
            }
          }
          if (!flag) break;
        }

        if (flag) {
          set
            .add(`${i},${j}`)
            .add(`${i},${j + 1}`)
            .add(`${i + 1},${j}`)
            .add(`${i + 1},${j + 1}`);
        }
      }
    }

    //조건 충족된거 지우고 당기기
    if (set.size === 0) break;
    console.log(set);
    const queue = [...set.values()];
    answer += set.size;

    while (queue.length > 0) {
      let [x, y] = queue.shift().split(',');
      board[parseInt(x)][parseInt(y)] = 0;
      while (x > 0) {
        if (board[x - 1][y]) {
          board[x][y] = board[x - 1][y];
          board[x - 1][y] = 0;
        }
        x--;
      }
    }
    console.log(set);
    break;
  }

  return answer;
}

console.log(solution(4, 5, ['CCBDE', 'AAADE', 'AAABF', 'CCBBF']));
const a = ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'];
//CCBDE
//AAADE
//AAABF
//CCBBF
const aa = new Set();

console.log(aa.size);
