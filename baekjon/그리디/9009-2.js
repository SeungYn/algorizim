const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1).map(Number);

const maxValue = Math.max(...list);
const fiboList = [0, 1];
let currentValue = 0;
let index = 2;

while (maxValue >= currentValue) {
  currentValue = fiboList[index - 1] + fiboList[index - 2];
  fiboList.push(currentValue);
  index++;
}

fiboList.reverse();

for (let i = 0; i < n; i++) {
  let targetValue = list[i];
  let result = [];
  for (let fibo of fiboList) {
    if (fibo <= targetValue && fibo !== 0) {
      result.unshift(fibo);
      targetValue -= fibo;
    }
  }
  console.log(result.join(' '));
}
