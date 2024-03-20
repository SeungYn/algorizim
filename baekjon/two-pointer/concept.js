const n = 8,
  m = 5;
const data = [3, 2, 4, 1, 2, 2, 1, 5];

let cnt = 0;
let intervalSum = 0;
let end = 0;

for (let start = 0; start < n; start++) {
  while (intervalSum < m && end < n) {
    intervalSum += data[end];
    end++;
  }
  console.log(start, end - 1, intervalSum);

  if (intervalSum === m) cnt++;
  intervalSum -= data[start];
}

console.log(cnt);
