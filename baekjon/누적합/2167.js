const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const arr = [new Array(m + 1).fill(0)];
let sum = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));

for (let i = 1; i < 1 + n; i++) {
  arr.push([0, ...input[i].split(' ').map(Number)]);
}

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= m; j++) {
    sum[i][j] = arr[i][j] + sum[i][j - 1] + sum[i - 1][j] - sum[i - 1][j - 1];
  }
}

const targets = input.slice(n + 2);
let result = '';
for (let line of targets) {
  const [i, j, x, y] = line.split(' ').map(Number);
  result +=
    sum[x][y] - sum[i - 1][y] - sum[x][j - 1] + sum[i - 1][j - 1] + '\n';
}

console.log(result);

// 단순 누적합인줄 알았는데 아님;;
// 직사각형안 누적합;;; 당황
// 먼가 누적합보단 dp느낌
// 어렵어렵
