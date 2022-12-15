const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString();

input = input.split('\n');

const testCaseNum = +input[0];
console.log(testCaseNum);

for (let i = 1; i <= testCaseNum; i++) {
  const arr = input[i].split(' ').map((i) => +i);
  console.log(arr);
}
