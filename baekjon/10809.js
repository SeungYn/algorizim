const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();
const alpaList = Array.from({ length: 26 }, (v, i) => i).map((i) =>
  String.fromCharCode(i + 97)
);

const result = alpaList.map((i) => input.indexOf(i));
console.log(result.join(' '));
