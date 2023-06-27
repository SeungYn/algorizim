const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const data = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, x] = data[0].split(' ').map(Number);
const list = data[1].split(' ').map(Number);

if (list.reduce((p, c) => p + c) === 0) return console.log('SAD');

// 슬라이딩 윈도우 풀이

let start = 0;
let end = x - 1;
let sum = list.slice(0, x).reduce((p, c) => p + c);
let max = sum;
let count = 1;

while (true) {
  start += 1;
  end += 1;
  if (end >= n) break;
  sum += list[end] - list[start - 1];
  if (max === sum) count++;
  else if (max < sum) {
    max = sum;
    count = 1;
  }
}

console.log(max);
console.log(count);

// 투 포인터로 풀었을 때 풀이ㅐ
// let max = 0;
// let start = 0;
// let end = 0;
// let sum = list[0];
// let currentX = 1;
// let count = 1;

// while (start <= end && end < n) {
//   // console.log(
//   //   `start: ${start} end:${end} max:${max} currentX:${currentX} count:${count} sum:${sum}`
//   // );
//   if (currentX <= x && end < n) {
//     currentX++;
//     end++;
//     sum += list[end];
//   } else if (currentX > x) {
//     currentX--;
//     start++;
//     sum -= list[start - 1];
//   }

//   if (sum > max && currentX === x) {
//     max = sum;
//     count = 1;
//   } else if (sum === max && currentX === x) {
//     count++;
//   }
// }

// console.log(max);
// console.log(count);

/**
 * max보다 작으면 end ++
 * max 보다 크면 start++
 * max랑 같으면 end++
 * sum 이 맥스보다 크면 max를 갱신해 줘야하는데 currentX 값이 충족 못하면 갱신이 안됨
 */
