const n = 4;
const queens = [];

function possible(x, y) {
  console.log(x, y, queens);
  for (let [a, b] of queens) {
    // 현재까지 놓았던 퀸 하나씩 탐색
    if (a === x || b === y) return false; // 행이나 열에 있으면 못 놓음
    if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선에 퀸이 존재하면 못 놓음
  }
  return true;
}

let cnt = 0;

function dfs(row) {
  if (row === n) {
    return cnt++;
  }
  for (let i = 0; i < n; i++) {
    const isPoosible = possible(row, i);

    if (!isPoosible) continue;
    queens.push([row, i]);
    dfs(row + 1);
    queens.pop();
  }
}

dfs(0);
console.log(cnt);
