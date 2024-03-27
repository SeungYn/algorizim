const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input[1].split(' ').map(Number);
const m = +input[2];
const targets = input.slice(3, 3 + m);
// console.log(n);
// console.log(list);
// console.log(m);
// console.log(targets);

// 일반적인 방법 시간복잡도가 n^2여서 안됨
// for (let i = 0; i < m; i++) {
//   const [start, end] = targets[i].split(' ').map(Number);

//   let sum = 0;
//   for (let j = start; j <= end; j++) {
//     sum += list[j - 1];
//   }
//   console.log(sum);
// }

// 구간 합 방식
const newList = list.map((v, i, arr) => (arr[i] += i > 0 ? arr[i - 1] : 0));
let answer = '';
for (let i = 0; i < m; i++) {
  const [start, end] = targets[i].split(' ').map(Number);

  answer += newList[end - 1] - (start - 2 > -1 ? newList[start - 2] : 0) + '\n';
}
console.log(answer);
