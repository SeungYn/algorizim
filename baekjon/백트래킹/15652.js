const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
let result = '';
const selected = [];

dfs(0, 1);
console.log(result);

function dfs(depth, start) {
  console.log(depth, start, selected);
  if (depth === m) {
    let str = '';
    str = selected.reduce((p, c) => p + c + ' ', '');
    str += '\n';
    result += str;

    return;
  }

  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1, i);
    selected.pop();
  }
}

//내가 한거
// function dfs(depth) {
//   if (depth === m) {
//     let str = '';
//     const flag = selected.every((v, i, origin) => {
//       if (i === 0) return true;
//       if (origin[i - 1] > origin[i]) return false;
//       return true;
//     });
//     if (!flag) return;

//     str = selected.reduce((p, c) => p + c + ' ', '');
//     str += '\n';
//     result += str;
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     selected.push(i);
//     dfs(depth + 1);
//     selected.pop();
//   }
// }
