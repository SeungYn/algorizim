const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const nums = input[1].split(' ').map(Number);
const oper = input[2].split(' ').map(Number);
let maxValue = -Infinity;
let minValue = Infinity;

dfs(nums[0], 1);
console.log(maxValue);

function dfs(res, depth) {
  if (depth === n) {
    maxValue = Math.max(maxValue, res);
    minValue = Math.min(minValue, res);
    return;
  }

  if (oper[0] > 0) {
    oper[0] -= 1;
    dfs(res + nums[depth], depth + 1);
    oper[0] += 1;
  }
  if (oper[1] > 0) {
    oper[1] -= 1;
    dfs(res - nums[depth], depth + 1);
    oper[1] += 1;
  }
  if (oper[2] > 0) {
    oper[2] -= 1;
    dfs(res * nums[depth], depth + 1);
    oper[2] += 1;
  }
  if (oper[3] > 0) {
    oper[3] -= 1;
    dfs(parseInt(res / nums[depth]), depth + 1);
    oper[3] += 1;
  }
}
