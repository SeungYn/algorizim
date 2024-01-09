const fs = require('fs');
const path =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = +input[0];
const ingredients = input.slice(1).map((str) => str.split(' ').map(Number));
let visited = [];
let currentIngredients = [];
let answer = Infinity;

for (let i = 0; i < n; i++) {
  visited = Array.from({ length: n }, () => false);
  currentIngredients = [];
  //console.log(i);
  dfs(0, i + 1);
}

console.log(answer);

function dfs(dep, targetDep) {
  if (dep >= targetDep) {
    let sour = 1;
    let bitterness = 0;

    currentIngredients.forEach((index) => {
      sour *= ingredients[index][0];
      bitterness += ingredients[index][1];
    });
    return (answer = Math.min(answer, Math.abs(sour - bitterness)));
  }

  for (let i = 0; i < n; i++) {
    if (visited[i]) continue;
    currentIngredients.push(i);
    visited[i] = true;
    dfs(dep + 1, targetDep);
    currentIngredients.pop();
    visited[i] = false;
  }
}
