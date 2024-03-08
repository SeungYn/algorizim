const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input.slice(1).map((s) => s.split(' ').map(Number));

for (let i = 1; i < n; i++) {
  for (let j = 0; j < list[i].length; j++) {
    if (j === 0) list[i][j] += list[i - 1][j];
    else if (j === list[i].length - 1) list[i][j] += list[i - 1][j - 1];
    else {
      list[i][j] = Math.max(
        list[i][j] + list[i - 1][j - 1],
        list[i][j] + list[i - 1][j]
      );
    }
  }
}
console.log(Math.max(...list[n - 1]));
