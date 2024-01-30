const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1).map((line) => line.split(' ').map(Number));

list.sort((a, b) => {
  const sub = a[1] - b[1];
  if (!sub) {
    return a[0] - b[0];
  }
  return sub;
});

let result = 0;
let endTime = 0;
for (let [a, b] of list) {
  if (endTime > a) continue;
  result++;
  endTime = b;
}

console.log(result);
