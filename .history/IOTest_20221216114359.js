function solution(rows, columns, queries) {
  var answer = [];

  const arr = Array.from({ length: rows }, () => new Array(columns));
  console.log(arr);
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
