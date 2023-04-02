const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

console.log(permutations(input[1].split(' ').map(Number)));

function permutations(arr, n) {
  const result = [];
  if (n === 1) return arr.map((i) => [i]);
  arr.forEach((v, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const permu = permutations(rest, n - 1);
    const res = permu.map((list) => [v, ...list]);
    result.push(...res);
  });
  return result;
}
