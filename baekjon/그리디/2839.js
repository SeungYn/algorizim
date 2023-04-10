const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
let n = +input[0];

let answer = 0;
let flag = false;
while (n >= 0) {
  if (n === 0 || n % 5 === 0) {
    answer += n / 5;
    console.log(answer);
    flag = true;
    break;
  }
  n -= 3;
  answer++;
}

if (!flag) console.log(-1);
// let success = false;
// let answer = 0;
// var share = n / 5;
// var rest = n % 5;

// if (rest === 0) {
//   answer += share;
//   console.log(answer);
//   return;
// }

// answer += Math.floor(share);
// n = n % 5;

// var share = n / 3;
// var rest = n % 3;

// if (rest === 0) {
//   answer += share;
//   console.log(answer);
//   return;
// }

// console.log(-1);
/**
 * 그리디로 최대 한 5로 나누고 나머지 3을 나누려고 하면 안됨 최솟값을 보장할수 없음
 * 5로 최대한 나눈 값에서 -1 씩해서 해보까
 */
