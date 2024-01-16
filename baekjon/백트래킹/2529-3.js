// const fs = require('fs');
// const PATH =
//   process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

// const input = fs.readFileSync(PATH).toString().trim().split('\n');
// const [k, list] = input.map((v) => (!isNaN(v) ? +v : v.split(' ')));

// const visited = Array.from({ length: 10 }, () => false);
// const currentNum = [];
// let maxValue = '';
// let minValue = '';

// dfs(0, list, currentNum);
// console.log(maxValue);
// console.log(minValue);

// function dfs(dep, list, currentNum) {
//   if (dep >= k + 1) {
//     let check = true;

//     for (let i = 0; i < k; i++) {
//       if (list[i] === '<') {
//         if (currentNum[i] > currentNum[i + 1]) check = false;
//       }

//       if (list[i] === '>') {
//         if (currentNum[i] < currentNum[i + 1]) check = false;
//       }

//       if (!check) return;
//     }
//     const value = currentNum.join('');
//     maxValue = value;
//     if (minValue === '') minValue = value;

//     return;
//   }

//   for (let i = 0; i < 10; i++) {
//     if (visited[i]) continue;
//     currentNum.push(i);
//     visited[i] = true;
//     dfs(dep + 1, list, currentNum);
//     currentNum.pop();
//     visited[i] = false;
//   }
// }

const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [k, list] = input.map((v) => (!isNaN(v) ? +v : v.split(' ')));

const visited = Array.from({ length: 10 }, () => false);
const currentNum = [];
let maxValue = -Infinity;
let minValue = Infinity;

dfs(0, list, currentNum);
console.log(maxValue);
console.log(minValue);

function dfs(dep, list, currentNum) {
  if (dep >= k + 1) {
    let value = '';
    const result = currentNum.reduce((p, c, i) => {
      value += c;
      return i !== k ? p + c + list[i] : p + c;
    }, '');

    if (eval(result)) {
      maxValue = Math.max(maxValue, value);
      minValue = Math.min(minValue, value);
    }
    return;
  }

  for (let i = 0; i < 10; i++) {
    if (visited[i]) continue;
    currentNum.push(i);
    visited[i] = true;
    dfs(dep + 1, list, currentNum);
    currentNum.pop();
    visited[i] = false;
  }
}
