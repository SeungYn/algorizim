const fs = require('fs');
const PATH =
  process.platform === 'linux' ? '/dev/stdin' : './baekjon/input.txt';

const input = fs.readFileSync(PATH).toString().trim().split('\n');

const n = +input[0];
const list = input.slice(1).map((line) => line.split(' ').map(Number));
let teamA = [],
  teamB = [];
let result = Infinity;
let answer = 987654321;
const team = [];
const visited = new Array(n).fill(false);
let overWrapCheck = false;

//console.time('makeTeam');
makeTeam(0);
//console.timeEnd('makeTeam');

dfs(0, 0, []);

// for (let i = 0; i < team.length / 2; i++) {
//   const startTeam = team[i];
//   const linkTeam = team[team.length - i - 1];
//   //console.log(startTeam, linkTeam);
//   let startScore = 0;
//   let linkScore = 0;
//   console.log('b');
//   for (let a = 0; a < startTeam.length - 1; a++) {
//     let score1 = 0;
//     let score2 = 0;
//     for (let b = a + 1; b < startTeam.length; b++) {
//       score1 +=
//         list[startTeam[a]][startTeam[b]] + list[startTeam[b]][startTeam[a]];
//       score2 += list[linkTeam[a]][linkTeam[b]] + list[linkTeam[b]][linkTeam[a]];
//     }

//     startScore += score1;
//     linkScore += score2;
//   }

//   result = Math.min(result, Math.abs(linkScore - startScore));
// }

const startTeam = [0, 1, 2];
const linkTeam = [3, 4, 5];
console.log(startTeam);
console.log(linkTeam);
//console.log(startTeam, linkTeam);
let startScore = 0;
let linkScore = 0;
console.log('b');
console.time('dfs');
for (let a = 0; a < startTeam.length - 1; a++) {
  let score1 = 0;
  let score2 = 0;
  for (let b = a + 1; b < startTeam.length; b++) {
    score1 +=
      list[startTeam[a]][startTeam[b]] + list[startTeam[b]][startTeam[a]];
    score2 += list[linkTeam[a]][linkTeam[b]] + list[linkTeam[b]][linkTeam[a]];
  }

  startScore += score1;
  linkScore += score2;
}
console.timeEnd('dfs');

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

function teamCompare(arr1, arr2) {
  let score1 = 0;
  let score2 = 0;

  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      score1 += list[arr1[i]][arr1[j]] + list[arr1[j]][arr1[i]];
      score2 += list[arr2[i]][arr2[j]] + list[arr2[j]][arr2[i]];
    }
  }
  return Math.abs(score1 - score2);
}

function makeTeam(count) {
  if (teamA.length === 1 && teamB.length === n - 1) {
    overWrapCheck = true;
  }

  if (count === n) {
    if (teamA.length === n / 2) {
      console.log('c');
      console.time('makeTeam');
      const curr = teamCompare(teamA, teamB);
      answer = Math.min(answer, curr);

      console.timeEnd('makeTeam');
    }
    return;
  }

  if (!overWrapCheck) {
    if (teamA.length < n / 2) {
      teamA.push(count);
      makeTeam(count + 1);
      teamA.pop();
    }

    teamB.push(count);
    makeTeam(count + 1);
    teamB.pop();
  }
}
