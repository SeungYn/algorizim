const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();

const data = input.split('\n')[0].toLocaleUpperCase();
const map = {};
[...data].forEach((i) => (map[i] = (map[i] || 0) + 1));

const test = Object.entries(map);
test.sort((a, b) => b[1] - a[1]);
if (test.length > 1) {
  console.log(test);
  return console.log(test[0][0] === test[1][0] ? '?' : test[0][0]);
}

console.log(test[0][0]);

//const arr = Object.values(map).sort((a, b) => b - a);

// if (arr.length > 1) console.log(arr[1] === arr[0] ? '?' : arr[0]);
// else console.log(arr[0]);
