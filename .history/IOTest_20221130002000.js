const fs = require('fs');
console.log(fs);

let input = fs.readFileSync('./input.txt').toString();
console.log(input);
input = input.split('\n');
console.log(input);

const testCaseNum = +input[0];
console.log(testCaseNum);
