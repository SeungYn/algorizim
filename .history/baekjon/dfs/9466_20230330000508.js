const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
let isTeam = [];
const result = [];
let index = 1;

for (let i = 0; i < n; i++) {
  const studentCnt = input[index];
  const students = input[index + 1].split(' ').map(Number);
  console.log(solution(studentCnt, students));

  break;
  index += 2;
}

function solution(n, students) {
  let notTeamCount = 0;
  let teamNumber = 0;
  isTeam = Array.from({ length: n + 1 }, () => false);

  for (let i = 1; i < n + 1; i++) {
    dfs(i, i, students);
  }
  function dfs(origin, now, students) {
    console.log(origin, now, students);
    if (now === undefined) return;
    if (isTeam[now]) return;
    if (students[now] === origin) {
      isTeam[now] = true;
      teamNumber++;
      return;
    }
    dfs(origin, students[now], students);
  }
  console.log(teamNumber);
  return n - teamNumber;
}
