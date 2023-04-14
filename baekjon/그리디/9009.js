const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const T = +input[0];
const data = input.slice(1).map(Number);
const max = Math.max(...data);
const fiboArr = [0, 1];
let arrIdx = 1;

while (true) {
  const next = fiboArr[arrIdx] + fiboArr[arrIdx - 1];
  if (next > max) break;
  fiboArr.push(next);
  arrIdx++;
}

let index = 0;
while (index < T) {
  const result = [];
  let n = data[index];

  for (let i = fiboArr.length - 1; i > 0; i--) {
    if (fiboArr[i] <= n) {
      result.push(fiboArr[i]);
      n -= fiboArr[i];
    }
  }
  console.log(
    result
      .reverse()
      .reduce((p, c) => `${p ? p : ''} ${c}`, '')
      .trimStart()
  );

  index++;
}

// 0 1 1 2 3 5 8 13 21 34 55 89
// 0 1 2 3 4 5 6 7 8 9 10 11 12
