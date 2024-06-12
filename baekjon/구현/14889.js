const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1).map((line) => line.split(' ').map(Number));

let result = Infinity;
const team = [];
const visited = new Array(n).fill(false);

dfs(0, 0, []);
for (let i = 0; i < team.length / 2; i++) {
  const startTeam = team[i];
  const linkTeam = team[team.length - i - 1];
  //console.log(startTeam, linkTeam);
  let startScore = 0;
  let linkScore = 0;
  for (let a = 0; a < startTeam.length; a++) {
    let score = 0;
    for (let b = 0; b < startTeam.length; b++) {
      score += list[startTeam[a]][startTeam[b]];
    }

    startScore += score;
  }

  for (let a = 0; a < linkTeam.length; a++) {
    let score = 0;
    for (let b = 0; b < linkTeam.length; b++) {
      score += list[linkTeam[a]][linkTeam[b]];
    }

    linkScore += score;
  }
  //console.log(startScore, linkScore);

  result = Math.min(result, Math.abs(linkScore - startScore));
}

console.log(result);

function dfs(index, dep, current) {
  if (current.length >= n / 2) {
    team.push([...current]);
    return;
  }

  for (let i = index; i < n; i++) {
    if (visited[i]) continue;
    current.push(i);

    dfs(i + 1, dep + 1, current);
    current.pop();
  }
}
