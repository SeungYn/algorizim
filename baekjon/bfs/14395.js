const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [s, t] = input[0].split(' ').map(Number);

const visited = new Set([s]);

const q = [[s, '']];

if (s === t) return console.log(0);
let flag = false;
while (q.length > 0) {
  const [n, oper] = q.shift();

  if (n === t) {
    console.log(oper);
    flag = true;
    return;
  }

  for (let op of ['*', '+', '-', '/']) {
    const next = eval(`${n}${op}${n}`);
    if (next < 0 || next > t) continue;
    if (visited.has(next)) continue;
    q.push([next, oper + op]);
    visited.add(next);
  }
}

if (!visited.has(t)) console.log(-1);
