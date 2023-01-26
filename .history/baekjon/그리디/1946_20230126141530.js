const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
let n = +input[0];
let startIndex = 1;
while (n > 0) {
  let successCount = 1;
  const personCount = +input[startIndex];
  const line = input.slice(startIndex + 1, startIndex + 1 + personCount);
  const personScores = line.map((i) => i.split(' ').map((k) => +k));
  startIndex += personCount + 1;

  personScores.sort((a, b) => a[0] - b[0]);
  console.log(personScores);
  let fivot = personScores[0];
  for (let i = 1; i < personCount; i++) {
    if (fivot[0] > personScores[i][0] || fivot[1] > personScores[i][1]) {
      successCount++;
      fivot = personScores[i];
    }
  }
  console.log(successCount);
  n--;
}

// let result = [];
// let startIndex = 1;
// while (n > 0) {
//   let successCount = 0;

//   const personCount = +input[startIndex];
//   const line = input.slice(startIndex + 1, startIndex + 1 + personCount);
//   const personScores = line.map((i) => i.split(' ').map((k) => +k));
//   startIndex += personCount + 1;
//   //console.log(input);
//   //console.log(personCount);
//   for (let i = 0; i < personCount; i++) {
//     let flag = true;
//     for (let j = 0; j < personCount; j++) {
//       if (i === j) continue;
//       if (
//         personScores[i][0] > personScores[j][0] &&
//         personScores[i][1] > personScores[j][1]
//       ) {
//         flag = false;
//         break;
//       }
//     }
//     if (flag) successCount++;
//   }
//   console.log(successCount);
//   n--;
// }

/**
 * 1, 4
 * 2, 5
 * 3, 6
 * 4, 2
 * 5, 7
 * 6, 1
 * 7, 3
 */
