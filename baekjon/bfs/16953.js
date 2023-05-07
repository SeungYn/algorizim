const fs = require('fs');

const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

const [a, b] = input[0].split(' ').map(Number);

const set = new Set([a]);

const q = [[+a, 0]];
let flag = false;
while (q.length > 0) {
  const [now, cnt] = q.shift();

  if (now > 1e9) continue;
  if (now === b) {
    flag = true;
    console.log(cnt + 1);
    break;
  }

  for (let op of [2, 1]) {
    let next = now;

    if (op === 2) next *= 2;
    else next = Number(next.toString() + '1');
    if (set.has(next)) continue;
    q.push([next, cnt + 1]);
    set.add(next);
  }
}

if (!flag) console.log(-1);
