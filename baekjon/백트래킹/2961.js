const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
let minValue = Infinity;
const ingredient = input.slice(1).map((i) => i.split(' ').map(Number));
let visited = new Array(n).fill(false);
let selectedIngredient = [];

for (let i = 1; i <= n; i++) {
  visited = new Array(n).fill(false);
  selectedIngredient = [];
  dfs(0, 0, i);
}

console.log(minValue);

function dfs(depth, start, n) {
  if (depth === n) {
    const [sSum, nSum] = selectedIngredient.reduce(
      (p, c) => {
        const [s, n] = p;
        return [c[0] * s, c[1] + n];
      },
      [1, 0]
    );

    minValue = Math.min(Math.abs(sSum - nSum), minValue);
    return;
  }

  for (let i = start; i < ingredient.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    selectedIngredient.push(ingredient[i]);
    dfs(depth + 1, i + 1, n);
    selectedIngredient.pop();
    visited[i] = false;
  }
}
