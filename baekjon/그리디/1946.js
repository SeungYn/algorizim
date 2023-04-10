const fs = require('fs');
const PATH = process.platform === 'linux' ? 'dev/stdin' : './baekjon/input.txt';
const input = fs.readFileSync(PATH).toString().trim().split('\n');
let testCase = +input[0];
let startIndex = 1;
const answer = [];

while (testCase > 0) {
  const personCount = +input[startIndex];
  const list = input
    .slice(startIndex + 1, startIndex + 1 + personCount)
    .map((line) => line.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  startIndex += personCount + 1;

  let successCount = 1;
  let pivot = list[0][1];
  for (let i = 1; i < personCount; i++) {
    if (pivot < list[i][1]) {
      continue;
    }
    pivot = Math.min(pivot, list[i][1]);
    successCount++;
  }
  console.log(successCount);
  answer.push(successCount);

  testCase--;
}

//
//B성적이 아무리 좋아봤자 A성적 기준으로 순위를 매기면 그 순윈는 변하지는 않지만 면접자를 뽑아야 되기때문에 A성적 기준으로 정렬을 하여 1등 성적을 기준을 제시합니다. 그러면 1등 성적 기준으로 B성적을 비교 하는데 그중 B가 높으면 비교하는 성적 기준을 교체 이말은 A성적 기준으로 순위는 변함이 없지만 B성적으로 인해 면접을 통과할수 있는 최소 기준이 변하기 때문 제 뇌피셜입니다 ㅋㅋ큐ㅠ

// A성적으로 정렬해 놓음 그리고 가장 첫번쨰 면접자를 피벗으로 둬가지고 그 다음 면접저랑 비교하는데 A,B성적중 하나라도 피벗보다 좋으면 피벗 교체 그럼 피벗은 이전보다 다음으로 성적이 좋은 사람 기준이됨 이 기준에 통과되어야 피벗 교체
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
