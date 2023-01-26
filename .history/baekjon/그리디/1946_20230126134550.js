const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];
let result = [];
let startIndex = 1;
while (n > 0) {
  let successCount = 0;
  const personCount = +input[startIndex];
  const line = input.slice(startIndex + 1, startIndex + personCount);
  const personScores = line.map((i) => i.split(' ').map((k) => +k));
  console.log(personScores);
  break;
}

/**
 * 1, 4
 * 2, 5
 * 3, 6
 * 4, 2
 * 5, 7
 * 6, 1
 * 7, 3
 */
