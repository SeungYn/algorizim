const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
const list = input[1].split(' ').map(Number);
const operator = input[2].split(' ').map(Number);

let max = -Infinity;
let min = Infinity;

dfs(1, list[0], list, operator);
console.log(max);
console.log(min);

function dfs(index, preValue, list, operator) {
  if (index === list.length) {
    max = Math.max(max, preValue);
    min = Math.min(min, preValue);
    return;
  }

  if (operator[0] > 0) {
    operator[0]--;
    dfs(index + 1, preValue + list[index], list, operator);
    operator[0]++;
  }
  if (operator[1] > 0) {
    operator[1]--;
    dfs(index + 1, preValue - list[index], list, operator);
    operator[1]++;
  }
  if (operator[2] > 0) {
    operator[2]--;
    dfs(index + 1, preValue * list[index], list, operator);
    operator[2]++;
  }
  if (operator[3] > 0) {
    operator[3]--;
    dfs(index + 1, ~~(preValue / list[index]), list, operator);
    operator[3]++;
  }
}
