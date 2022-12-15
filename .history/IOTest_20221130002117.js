const fs = require('fs');
console.log(fs);

let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');
console.log(input);

const testCaseNum = +input[0];
console.log(testCaseNum);

for (let i = 1; i <= testCaseNum; i++) {
  console.log(input);
  const arr = input[i].split(' ');
  console.log(arr);
}
