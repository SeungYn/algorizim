'use-strict';

//배열로 풀려고하면 안됨 시간초과
function solution(n, left, right) {
  var answer = [];
  for (let i = 1; i < n + 1; i++) {
    const arr = Array.from({ length: n }, () => 0);
    arr.fill(i, 0, i);
    for (let j = i; j < n; j++) {
      arr[j] = j + 1;
    }

    answer.push(...arr);
  }
  return answer.slice(left, right + 1);
}

function solution2(n, left, right) {
  var answer = [];
  const row = n / left;
  const col = n % right;
  console.log(row, col);
}

solution2(3, 2, 5);
