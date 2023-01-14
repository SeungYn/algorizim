const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const fs = require('fs');
const input = fs.readFileSync(PATH).toString();

const arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

const dialog = {'A':2, 'B':2, 'C':2, 'D':3, 'E':3, 'F':3,
'G':4, 'H':4, 'I':4, 'J':5, 'K':5, 'L':5,
'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'};
console.log(input);
