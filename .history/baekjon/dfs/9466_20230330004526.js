const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
let isTeam = [];
let index = 1;

for (let i = 0; i < n; i++) {
  const studentCnt = +input[index];
  const students = [0, ...input[index + 1].split(' ').map(Number)];
  const visited = Array.from({ length: n + 1 }, () => false);
  const finished = Array.from({ length: n + 1 }, () => false);
  const result = [];
  for (let x = 1; x <= studentCnt; x++) {
    if (!visited[x]) dfs(x, students, visited, finished, result);
  }

  break;
  index += 2;
}

function dfs(parent, students, visited, finished, result) {
  visited[parent] = true;
  let child = students[parent];
  if (!child) dfs(child, students, visited, finished, result);
  else {
    if (!finished[child]) {
      while (child !== parent) {
        result.push(child);
        child = students[child];
      }

      result.push(parent);
    }
  }
  finished[parent] = true;
}

function solution(n, students) {
  isTeam = Array.from({ length: n + 1 }, () => false);

  for (let i = 1; i < +n + 1; i++) {
    dfs(i, i, students);
  }
  function dfs(origin, now, students) {
    if (now === students[now]) {
      isTeam[now] = true;
      return;
    }

    if (students[now] === origin) {
      isTeam[now] = true;
      return;
    }
    dfs(origin, students[now], students);
  }

  return isTeam.reduce((prev, v) => (v === false ? ++prev : prev), 0);
}