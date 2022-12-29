function solution(rows, columns, queries) {
  var answer = [];

  const arr = Array.from({ length: rows }, () =>
    Array.from({ length: columns + 1 }, (v) => 0)
  );

  for (let i = 0; i < rows; i++) {
    for (let j = 1; j <= rows; j++) {
      arr[i][j] = (i + 1) * j;
    }
  }
  console.log(arr);
  arr.unshift(Array(columns + 1).fill(0));
  for (let set of queries) {
    const result = [];
    const [sX, sY, eX, eY] = set;
    let x = sX,
      y = sY;
    for (let i = 0; i <= eY - sY; i++) {
      y = sY + i;
      result.push(arr[x][y]);
    }
    for (let i = 1; i <= eX - sY; i++) {
      x = sX + i;
      result.push(arr[x][y]);
    }

    for (let i = eY - sY - 1; i >= 1; i--) {
      y = sY + i;
      result.push(arr[x][y]);
    }

    for (let i = eX - sX - 1; i >= 1; i--) {
      x = sX + i;
      result.push(arr[x][y]);
    }
    break;
  }
  console.log(arr);
  return answer;
}

solution(6, 6, [
  [2, 2, 5, 4],
  [3, 3, 6, 6],
  [5, 1, 6, 3],
]);
//첫번째 방법 일렬로 숫자를 구하고 하나씩 옮기기
