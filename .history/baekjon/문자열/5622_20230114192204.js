const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const fs = require('fs');
const input = fs.readFileSync(PATH).toString();

const arr = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));
console.log(arr);
const dialog = {'A', 'B', 'C', 'D', 'E', 'F',
'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',
'S', 'T', 'U', 'V', 'W', 'X',
'Y', 'Z'};
console.log(input);
