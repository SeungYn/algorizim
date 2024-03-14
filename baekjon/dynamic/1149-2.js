const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const map = input.slice(1).map((l) => l.split(' ').map(Number));
const dp = new Array(n).fill(0);
dp[0] = Math.min(...map[0]);
dp[1] = Math.min(
  map[1][0] + map[0][1],
  map[1][0] + map[0][2],
  map[1][1] + map[0][0],
  map[1][1] + map[0][2],
  map[1][2] + map[0][0],
  map[1][2] + map[0][1]
);

for (let i = 1; i < n; i++) {
  dp[i] =
    Math.min(
      map[i][0] + map[i - 1][1],
      map[i][0] + map[i - 1][2],
      map[i][1] + map[i - 1][0],
      map[i][1] + map[i - 1][2],
      map[i][2] + map[i - 1][0],
      map[i][2] + map[i - 1][1]
    ) + dp[i - 2];

  map[i][0] = Math.min(map[i][0] + map[i - 1][1], map[i][0] + map[i - 1][2]);
  map[i][1] = Math.min(map[i][1] + map[i - 1][0], map[i][1] + map[i - 1][2]);
  map[i][2] = Math.min(map[i][2] + map[i - 1][0], map[i][2] + map[i - 1][1]);
}
console.log(Math.min(...map[n - 1]));

/**
 * 처음 내 방식의 문제점은 dp[i] 값을 구할 때 값은 라인이 아닌 것을 골랐다는 보장이 없음
 * + dp[i - 2] 이걸로 최솟값을 뽑아도 i번째와 i - 1번째가 같은 라인이 아닌 것은 보장이 되지만, i -2 와 i - 1이
 * 같은 라인이 아닌 것이라는 거에 대한 보장이 없음
 * 문제를 풀 때 이부분 생각했는데 예제 1번이 맞는 것을 보고 그냥 넘어감
 */
