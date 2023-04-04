const n = 8;
const queens = [];

function possible(x, y) {
  for (let [a, b] of queens) { // 현재까지 놓았던 퀸 하나씩 탐색
    if (a === x || b === y) return false; // 행이나 열에 있으면 못 놓음
    if (Math.abs(a - x) === Math.abs(b - y)) return false; // 대각선에 퀸이 존재하면 못 놓음
  }
  return true;
}

let cnt = 0;

function dfs(row) {
  if (row === n) cnt += 1; // 퀸을 다 놓으면 갯수 증가
  for (let i = 0; i < n; i++) {
    if (!possible(row, i)) continue; // 현재 위치에 놓을 수 없다면 무시
    queens.push([row, i]); // 현재 위치에 퀸을 놓기
    dfs(row + 1);
    queens.pop(); // 현재 위치 퀸을 제거 후에 다른 자리 탐색
  }
}

dfs(0);
console.log(cnt);
