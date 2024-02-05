const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const max = Math.max(n, k) + 2;
const list = new Array(max).fill(Infinity);
list[n] = 0;

const queue = [n];

while (queue.length > 0) {
  const v = queue.shift();
  const sec = list[v];

  for (let oper of ['-', '+', '*']) {
    let nextV;
    if (oper === '-') {
      nextV = v - 1;
    } else if (oper === '+') {
      nextV = v + 1;
    } else if (oper === '*') {
      nextV = v * 2;
    }

    if (nextV < 0 || nextV >= max) continue;

    if (sec + 1 < list[nextV]) {
      list[nextV] = sec + 1;
      queue.push(nextV);
    }
  }
}

console.log(list[k]);
