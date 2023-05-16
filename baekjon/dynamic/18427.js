const fs = require('fs');
const input = fs
  .readFileSync(
    process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt'
  )
  .toString()
  .trim()
  .split('\n');

/**
 * 각 사람마다 i번째 높이의 블록을 만들수 있는 경우의수를 구함
 */

const [n, m, h] = input[0].split(' ').map(Number);
let a = [];
for (let i = 1; i < n + 1; i++) {
  a.push(input[i].split(' ').map(Number));
}
let d = new Array(h + 1).fill(0);

d[0] = 1;

for (let i = 0; i < n; i++) {
  const data = [];
  for (let j = 0; j <= h; j++) {
    for (let k = 0; k < a[i].length; k++) {
      if (d[j] && j + a[i][k] <= h) {
        data.push([j + a[i][k], d[j]]);
      }
    }
  }
  console.log(data);
  console.log(d);
  for (let [h, v] of data) {
    d[h] = (d[h] + v) % 10007;
  }
  console.log(d);
}

console.log(d[h]);
console.log(2 & 0);
// 한 사람이 자신의 블록으로 올릴수 있으면 올림 d에 체크
// 다음 사람은 이전 사람의 블록 상태를 기준으로 블록을 올림
// 중요한건 한 사람이 블록을 올릴때 기존의 블록 상태는 이전을 기준으로 해야함 내가 블록읕ㄹ 올릴수 있다고해서 해당 상태를 바꾸면 안됨
// 우리의 해결방안의 특징은 이전의 상태를 기준으로 내 블록을 쌓을수 있는지 없는지를 판단하고 마지막에 경우의 수를 더해주기 떄문

// for (let i = 0; i < n; i++) {
//   let data = [];

//   for (let j = 0; j <= h; j++) {
//     for (let k = 0; k < a[i].length; k++) {
//       if (d[j] !== 0 && j + a[i][k] <= h) {
//         //console.log([j + a[i][k], d[j]], j, a[i][k]);
//         data.push([j + a[i][k], d[j]]);
//       }
//     }
//   }

//   for (let [h, v] of data) {
//     d[h] = (d[h] + v) % 10007;
//   }
// }
