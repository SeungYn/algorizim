const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const testcase = +input[0];
const nums = input.slice(1).map((i) => +i);
const result = [];

for (let i = 0; i < testcase; i++) {
  const arr = Array.from({ length: nums[i] }, (_, i) => i + 1);
  dfs(arr, 1, result, nums[i]);
  console.log();
}

function dfs(arr, dep, result, n) {
  if (dep === n) {
    let str = '';
    for (let i = 0; i < n - 1; i++) str += arr[i] + result[i];
    str += arr[n - 1] + '';
    const sum = eval(str.split(' ').join(''));

    return sum === 0 && console.log(str);
  }
  for (let x of [' ', '+', '-']) {
    result.push(x);
    dfs(arr, dep + 1, result, n);
    result.pop();
  }
}
