const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const form = input[0] + '';
console.log(form);

const subPosition = form.indexOf('-');
let before = form.slice(0, subPosition);
console.log(subPosition);
console.log(before);
