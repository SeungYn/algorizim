const fs = require('fs');
const path =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const ingredients = input.slice(1).map((str) => str.split(' ').map(Number));
let visited = Array.from({ length: n }, () => false);
let currentIngredients = [];
let answer = Infinity;

dfs(0, 0);

console.log(answer);

function dfs(dep, start) {
  if (dep >= 1) {
    const [sSum, nSum] = currentIngredients.reduce(
      (p, v) => {
        const [s, n] = p;
        return [s * v[0], n + v[1]];
      },
      [1, 0]
    );
    answer = Math.min(answer, Math.abs(sSum - nSum));
  }

  for (let i = start; i < n; i++) {
    if (visited[i]) continue;
    currentIngredients.push(ingredients[i]);
    visited[i] = true;
    dfs(dep + 1, i + 1);
    currentIngredients.pop();
    visited[i] = false;
  }
}
