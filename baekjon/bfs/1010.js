const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

let n = +input[0];
// 위에서 선택된거 제외하고 골라야함

let index = 1;
const arr = [1, 2, 3, 4, 5];
const visited = new Array(5).fill(false);
const current = [];
function dfs(s, dep, current) {
  if (dep === 3) {
    console.log(current);
    return;
  }

  for (let i = s; i < arr.length; i++) {
    current.push(arr[i]);
    dfs(i + 1, dep + 1, current);
    current.pop();
  }
}

dfs(0, 0, current);
// let cnt = 0;
// dfs2(0, current);
// function dfs2(dep, current) {
//   if (dep === 3) {
//     console.log(current);
//     cnt++;
//     return;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (visited[i]) continue;
//     visited[i] = true;
//     current.push(arr[i]);
//     dfs2(dep + 1, current);
//     current.pop();
//     visited[i] = false;
//   }
// }

// console.log(cnt);
console.clear();
const a = [1, 2, 3];
const b = a.concat([4, 5, 6]);
b[0] = 4;
console.log(a);
console.log(b);
