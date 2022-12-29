function solution(rows, columns, queries) {
  var answer = [];

  const arr = Array.from({ length: rows }, () => new Array(columns));
  console.log(arr);
  for (let i = 0; i < rows; i++) {
    for (let j = 1; j <= rows; j++) {
      arr[i][j] = (i + 1) * j;
    }
  }

  console.log(arr);
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
