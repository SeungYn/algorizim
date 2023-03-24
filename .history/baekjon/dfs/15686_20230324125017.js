const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const Map = [];

const [M, N] = input[0].split(' ').map(Number);

for (let i = 1; i < M + 1; i++) {
  Map.push(input[i].split(' ').map(Number));
}

const home = [];
const chicken = [];

for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    if (Map[i][j] === 1) home.push([+i, +j]);
    if (Map[i][j] === 2) chicken.push([+i, +j]);
  }
}
console.log(home);
console.log(chicken);
console.log(combinations(chicken, 2));

function combinations(arr, selectNumber) {
  const result = [];
  if (selectNumber === 1) return arr.map((i) => [i]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const cms = combinations(rest, selectNumber - 1);
    const attached = cms.map((el) => [fixed, ...el]);
    result.push(...attached);
  });
  return result;
}
