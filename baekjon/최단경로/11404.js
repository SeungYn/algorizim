const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const m = +input[1];
const list = input.slice(2);

const map = Array.from({ length: n + 1 }, () =>
  new Array(n + 1).fill(Infinity)
);

for (const line of list) {
  const [a, b, c] = line.split(' ').map(Number);

  map[a][b] = Math.min(c, map[a][b]);
}

for (let i = 1; i <= n; i++) {
  map[i][i] = 0;
}

for (let k = 1; k <= n; k++) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      map[i][j] = Math.min(map[i][k] + map[k][j], map[i][j]);
    }
  }
}

for (let i = 1; i <= n; i++) {
  let str = '';
  for (let j = 1; j <= n; j++) {
    if (map[i][j] === Infinity) map[i][j] = 0;
    str += map[i][j] + ' ';
  }
  console.log(str);
}
