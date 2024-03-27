const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let sum = 0;
const list = [0, ...input[1].split(' ')].map((v, i, origin) => {
  sum += +v;
  return sum;
});

let result = 0;
const processed = [];
const counter = {};
for (let i = 0; i < list.length; i++) {
  const v = list[i] % m;
  processed.push(v);

  counter[v] = (counter[v] || 0) + 1;
}

for (let i = 0; i < m; i++) {
  if (i in counter) result += parseInt((counter[i] * (counter[i] - 1)) / 2);
}

console.log(result);
// 핵심 모듈러 분배
// 같은 나머지 끼지 조합
// 0을 추가한 이유는 해당 첫번째 부터 해당 인덱스까지의 합일 경우이기 때문
