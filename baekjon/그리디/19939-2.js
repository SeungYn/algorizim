const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let [n, k] = input[0].split(' ').map(Number);

const summary = Array.from({ length: k }, (_, i) => 1 + i).reduce(
  (p, c) => p + c
);

if (summary > n) return console.log(-1);

n -= summary;

if (n % k === 0) console.log(k - 1);
else console.log(k);

// 6 3 2
// 1 2 3
// 5 3 -1
// 1 2 3
// 7 3 -1
// 8 3
// 1 2 5
// 12 3
// 6
// 17 4
// 1 2 3 4 ... 2

// $N$개의 공을
// $K$개의 바구니에 빠짐없이 나누어 담는다.
// 각 바구니에는 1개 이상의 공이 들어 있어야 한다.
// 각 바구니에 담긴 공의 개수는 모두 달라야 한다.
// 가장 많이 담긴 바구니와 가장 적게 담긴 바구니의 공의 개수 차이가 최소가 되어야 한다.
