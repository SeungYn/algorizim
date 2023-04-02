const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const nums = input[1].split(' ').map(Number);
const calc = input[2].split(' ').map(Number);
let maxValue = -Infinity;
let minValue = Infinity;

let calcList =
  '+'.repeat(calc[0]) +
  '-'.repeat(calc[1]) +
  '*'.repeat(calc[2]) +
  '/'.repeat(calc[3]);

calcList = calcList.split('');

const permutationsCalcList = permutations(calcList, n - 1);

for (const list of permutationsCalcList) {
  let res = nums[0];
  console.log('리스트 시작');
  for (let i = 1; i < n; i++) {
    switch (list.pop()) {
      case '+':
        res = res + nums[i];
        break;
      case '-':
        res = res - nums[i];
        break;
      case '*':
        res = res * nums[i];
        break;
      case '/':
        res = res / nums[i];
        break;
    }
  }

  if (res === 52) console.log('123');

  maxValue = Math.max(maxValue, res);
  minValue = Math.min(minValue, res);
}

console.log(maxValue);
console.log(minValue);

function permutations(arr, depth) {
  if (depth === 1) return arr.map((i) => [i]);
  const result = [];
  arr.forEach((v, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const permu = permutations(rest, depth - 1);
    const res = permu.map((list) => [v, ...list]);
    result.push(...res);
  });
  return result;
}

console.log(-2 / 1);
