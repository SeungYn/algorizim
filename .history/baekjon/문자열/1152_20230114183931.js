const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(filePath).toString();
const data = input.split(' ').filter((i) => i !== '' && i !== '\n');

if (data.length > 0) console.log(data.length);
else console.log(0);
