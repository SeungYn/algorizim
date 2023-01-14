const fs = require('fs');
console.log(process.platform);
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(filePath).toString();
console.log(input);
const data = input.split(' ').filter((i) => i !== '');
console.log(data);
if (data.length > 0) console.log(data.length);
else console.log(0);
