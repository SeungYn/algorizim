const fs = require('fs');
const input = fs.readFileSync('./baekjon/input.txt').toString();

const data = input.split('\n')[0].toLocaleUpperCase();
const map = {};
[...data].forEach((i) => (map[i] = (map[i] || 0) + 1));
console.log(Object.values(map));
