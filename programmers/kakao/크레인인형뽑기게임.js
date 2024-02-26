function solution(board, moves) {
  var answer = 0;
  const stack = [];
  moves = moves.map((v) => v - 1);

  moves.forEach((m) => {
    for (let i = 0; i <= board.length - 1; i++) {
      if (board[i][m] === 0) continue;
      const movingItem = board[i][m];

      board[i][m] = 0;

      if (stack.length > 0 && stack[stack.length - 1] === movingItem) {
        stack.pop();
        answer += 2;
      } else stack.push(movingItem);

      break;
    }
  });

  return answer;
}
