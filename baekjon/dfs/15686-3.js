const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const map = input.slice(1).map((s) => s.split(' ').map(Number));
const homeList = [];
const chickenList = [];
let bruteChickenList = [];
let currentArr = [];
let result = Infinity;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (map[i][j] === 1) homeList.push([i, j]);
    else if (map[i][j] === 2) chickenList.push([i, j]);
  }
}

dfs(0, 0, chickenList, bruteChickenList, currentArr, m);

// for (let cList of bruteChickenList) {
//   let localSum = 0;

//   for (let [x, y] of homeList) {
//     let oneHomeSum = Infinity;
//     for (let cl of cList) {
//       const [dx, dy] = chickenList[cl];
//       oneHomeSum = Math.min(Math.abs(x - dx) + Math.abs(y - dy), oneHomeSum);
//     }
//     localSum += oneHomeSum;
//   }

//   result = Math.min(result, localSum);
// }
console.log(result);

function dfs(index, dep, chickenList, bruteChickenList, currentArr, n) {
  if (dep <= n) {
    let localSum = 0;
    for (let [x, y] of homeList) {
      let oneHomeSum = Infinity;
      for (let cl of currentArr) {
        const [dx, dy] = chickenList[cl];
        oneHomeSum = Math.min(Math.abs(x - dx) + Math.abs(y - dy), oneHomeSum);
      }
      localSum += oneHomeSum;
    }
    result = Math.min(result, localSum);
  }

  for (let i = index; i < chickenList.length; i++) {
    if (currentArr.includes(i)) continue;
    currentArr.push(i);
    dfs(i + 1, dep + 1, chickenList, bruteChickenList, currentArr, n);
    currentArr.pop();
  }
}
