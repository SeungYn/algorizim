const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1);
const map = [];
const result = [];

for (let i = 0; i < n; i++) {
  map.push(new Array(n).fill(Infinity));
  for (let j = 0; j < n; j++) {
    if (list[i][j] === 'Y') {
      map[i][j] = 1;
    }
  }
}

for (let i = 0; i < n; i++) map[i][i] = 0;

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (map[i][j] > map[i][k] + map[k][j]) {
        map[i][j] = map[i][k] + map[k][j];
      }
    }
  }
}

let array = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (i !== j && map[i][j] <= 2) array[i]++;
  }
}

console.log(Math.max(...array));
