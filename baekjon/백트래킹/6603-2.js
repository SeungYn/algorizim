const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const len = input.length;

for (let i = 0; i < len; i++) {
  const [k, ...s] = input[i].split(' ').map(Number);
  if (k === 0) break;

  const visited = Array.from({ length: s.length }, () => false);
  const currentS = [];
  dfs(0, 0, k, s, visited, currentS);
  console.log('');
}

function dfs(dep, start, k, s, visited, currentS) {
  if (dep >= 6) {
    return console.log(currentS.join(' '));
  }

  for (let i = start; i < k; i++) {
    if (visited[i]) continue;
    currentS.push(s[i]);
    visited[i] = true;
    dfs(dep + 1, i + 1, k, s, visited, currentS);
    currentS.pop();
    visited[i] = false;
  }
}

// const fs = require('fs');
// const PATH =
//   process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

// const input = fs.readFileSync(PATH).toString().trim().split('\n');

// let selctedNums = [];
// let visited = [];

// for (const list of input) {
//   [num, ...rest] = list.split(' ').map(Number);
//   visited = new Array(num).fill(false);
//   selctedNums = [];
//   if (num === 0) break;
//   dfs(0, 0);
//   console.log('');
// }

// function dfs(depth, start) {
//   if (depth === 6) {
//     let str = '';
//     str = selctedNums.reduce((p, c) => p + c + ' ', '');
//     console.log(str);
//     return;
//   }

//   for (let i = start; i < num; i++) {
//     if (visited[i]) continue;
//     selctedNums.push(rest[i]);
//     visited[i] = true;
//     dfs(depth + 1, i + 1);
//     visited[i] = false;
//     selctedNums.pop();
//   }
// }
