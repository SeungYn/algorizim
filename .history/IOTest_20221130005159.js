const fs = require('fs');
const { resolve } = require('path');

let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');

const testCaseNum = +input[0];
console.log(testCaseNum);

for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((i) => +i);
  console.log(arr);
}

new Promise(() => {
  console.log(123);
  resolve('true');
});
