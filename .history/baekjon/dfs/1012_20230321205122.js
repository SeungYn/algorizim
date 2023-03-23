const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/stdin/dev' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const testCount = +input[0];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let line = 1;
let field = null;
let visited = null;
let cabbageGraph = null;

for (let i = 0; i < testCount; i++) {
  //가로, 세로 ,배추갯수

  const [M, N, K] = input[line].split(' ');
  visited = Array.from({ length: +N }, () =>
    Array.from({ length: +M }, () => false)
  );
  field = Array.from({ length: +N }, () => Array.from({ length: +M }, () => 0));
  console.log(field);
  for (let j = 0; j < +K; j++) {
    const [a, b] = input[line + 1 + j].split(' ');
    console.log(a, b);
    field[+b][+a] = 1;
  }

  line += +K + 1;
  break;
}

//
function dfs(x, y, N, M) {
  if (visited[x][y] || field[x][y]) return;

  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (0 <= nx && nx < N && 0 <= ny && ny <= M) {
      dfs(nx, ny, N, M);
    }
  }
}
