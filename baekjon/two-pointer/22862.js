// 선형으로 풀어야된다는 것을 알아내야함 큰 N,k로 인해
// 가장 긴 짝수 연속한 부분 수열
//

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const data = fs.readFileSync(PATH).toString().trim().split('\n');
let [n, k] = data[0].split(' ').map(Number);
const list = data[1].split(' ').map(Number);

let end = 0;
let eraseCount = 0;
let result = 0;

for (let start = 0; start < n; start++) {
  while (end < n) {
    if (list[end] % 2) {
      if (eraseCount === k) break;
      eraseCount++;
      end++;
    } else {
      end++;
    }
  }

  result = Math.max(result, end - start - eraseCount);
  if (list[start] % 2) {
    eraseCount--;
  }
}
console.log(result);
