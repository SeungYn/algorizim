// 100 70 [95, 90, 80, 80, 80, 70,70, 30,10] 4 3
function solution(cap, k, score, m) {
  const origin = [...score];
  let lastIndex = 0;
  let startIndex = 0;

  if (score.at(-1) >= k) return -1;

  for (let i = 0; i < score.length; i++) {
    if (score[i] > k) {
      lastIndex = i;
    }
  }

  startIndex = m - 1;

  let plusIndex = score.length - 1;
  for (let i = startIndex; i <= lastIndex; i++) {
    let diff = score[i] - k;

    while (diff > 0) {
      if (score[plusIndex] + diff < k) {
        score[i] -= diff;
        score[plusIndex] += diff;
        diff = 0;
      } else {
        diff -= k - score[plusIndex];
        score[i] -= k - score[plusIndex];
        score[plusIndex] += k - score[plusIndex];

        plusIndex--;
      }
    }
  }

  return score.reduce((p, c, i, ori) => (ori[i] === origin[i] ? p : p + 1), 0);
}

console.log(solution(100, 70, [95, 90, 80, 80, 80, 70, 70, 30, 10], 4));
console.log(solution(100, 82, [100, 97, 97, 92, 87, 77, 77, 72, 72], 4));
console.log(solution(2000, 1998, [2000, 2000, 2000, 2000, 1999], 5));
