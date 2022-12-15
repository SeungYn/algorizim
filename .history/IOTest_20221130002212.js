const fs = require('fs');

let input = fs.readFileSync('./input.txt').toString();

input = input.split('\n');

const testCaseNum = +input[0];
console.log(testCaseNum);

for (let i = 1; i <= testCaseNum; i++) {
  console.log(input);
  const arr = input[i].split(' ');
  //console.log(arr);
}
