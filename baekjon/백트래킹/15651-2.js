const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const currentArr = [];

// 되도록이면 console.log를 반복문 안에서 호출 말고 마지막에 한번 호출 되도록 작성
// 많은 호출은 시간초과 걸림

dfs(1, currentArr);
let answer = '';
function dfs(dep, currentArr) {
  if (dep > m) return console.log(currentArr.join(' '));

  for (let i = 1; i <= n; i++) {
    currentArr.push(i);
    dfs(dep + 1, currentArr);
    currentArr.pop();
  }
}

// const fs = require('fs');
// const PATH =
//   process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

// const input = fs.readFileSync(PATH).toString().trim().split('\n');
// const [n, m] = input[0].split(' ').map(Number);
// const currentArr = [];
// let answer = '';

// dfs(1, currentArr);
// console.log(answer);

// function dfs(dep, currentArr) {
//   if (dep > m) return (answer += currentArr.join(' ') + '\n');

//   for (let i = 1; i <= n; i++) {
//     currentArr.push(i);
//     dfs(dep + 1, currentArr);
//     currentArr.pop();
//   }
// }
