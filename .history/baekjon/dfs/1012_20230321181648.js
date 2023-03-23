const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/stdin/dev' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
console.log(input);
