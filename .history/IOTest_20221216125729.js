function solution(rows, columns, queries) {
  var answer = [];

  const arr = Array.from({ length: rows }, () =>
    Array.from({ length: columns + 1 }, (v) => 0)
  );
  let count = 1;
  for (let i = 0; i < rows; i++) {
    for (let j = 1; j <= rows; j++) {
      arr[i][j] = count;
      count++;
    }
  }

  arr.unshift(Array(columns + 1).fill(0));
  console.log(arr);
  for (let set of queries) {
    const result = [];
    const position = [];
    const [sX, sY, eX, eY] = set;
    let x = sX,
      y = sY;
    for (let i = 0; i <= eY - sY; i++) {
      y = sY + i;
      result.push(arr[x][y]);
      position.push([x, y]);
    }
    for (let i = 1; i <= eX - sX; i++) {
      x = sX + i;
      result.push(arr[x][y]);
      position.push([x, y]);
    }

    for (let i = eY - sY - 1; i >= 0; i--) {
      y = sY + i;
      result.push(arr[x][y]);
      position.push([x, y]);
    }

    for (let i = eX - sX - 1; i >= 1; i--) {
      x = sX + i;
      result.push(arr[x][y]);
      position.push([x, y]);
    }

    const end = result.pop();
    result.unshift(end);
    answer.push(Math.min(...result));

    for (let i = 0; i < result.length; i++) {
      const [a, b] = position[i];
      arr[a][b] = result[i];
    }
    console.log(arr);
  }
  console.log(answer);

  return answer;
}

solution(10, 5, [
  [1, 2, 3, 4],
  [2, 2, 5, 5],
]);
//첫번째 방법 일렬로 숫자를 구하고 하나씩 옮기기
