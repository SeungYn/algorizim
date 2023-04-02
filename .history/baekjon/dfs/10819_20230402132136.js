const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const n = +input[0];

const arr = permutations(input[1].split(' ').map(Number), n);
let maxValue = -Infinity;
arr.forEach((list) => {
  let result = 0;
  for (let i = 0; i < n - 1; i++) {
    result += Math.abs(list[i] - list[i + 1]);
  }

  maxValue = Math.max(result, maxValue);
});

console.log(maxValue);

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
