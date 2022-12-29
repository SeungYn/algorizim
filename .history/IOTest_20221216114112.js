function solution(rows, columns, queries) {
  var answer = [];

  const arr = Array.from({ length: rows }, () =>
    Array.from({ length: columns + 2 }, (v, i) =>
      i === 0 || i === columns + 1 ? 0 : i
    )
  );
  console.log(arr);
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
