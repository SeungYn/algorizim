const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
const alpaList = Array.from({ length: 26 }, (v, i) => i)
  .map((i) => String.fromCharCode(i + 97))
  .join('');

const result = [...input].map((i) => alpaList.indexOf(i));
console.log(result);
