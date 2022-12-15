function solution(arr) {
  var answer = [];
  let one = 0;
  let zero = 0;
  const visited = Array.from({ length: arr.length }, () =>
    new Array(arr.length).fill(false)
  );

  function helper(start, end, n) {
    if (n < 1) return;
    if (n === 1 && !visited[start][end]) {
      if (arr[start][end] === 1) one++;
      else zero++;
      visited[start][end] = true;
      return;
    }

    //console.log(check(start, start, middle, arr));
    if (check(start, start, n, arr)) {
      if (arr[start][start] === 0) zero++;
      else one++;
      for (let i = start; i < n; i++) {
        for (let j = start; j < n; j++) {
          visited[i][j] = true;
        }
      }
    } else {
      let middle = n / 2;
      helper(start, end, middle);
      helper(start, end + middle, middle);
      helper(start + middle, end, middle);
      helper(start + middle, end + middle, middle);
    }
  }
  helper(0, 0, arr.length);
  console.log(one, zero);
  console.log(visited);
  return answer;
}

// function helper(rowStart, colStart, n) {
//   let middle = n / 2;
//   if (middle < 1) return;
//   if (middle > 1) {
//     helper(rowStart, colStart, middle);
//     helper(rowStart, colStart + middle, middle);
//     helper(rowStart + middle, colStart, middle);
//     helper(rowStart + middle, colStart + middle, middle);
//   } else {
//     if (check(rowStart, colStart, n, arr)) {
//       if (arr[rowStart][colStart] === 0) zero++;
//       else one++;
//     } else {
//       for (let a = rowStart; a < rowStart + n; a++) {
//         for (let b = colStart; b < colStart + n; b++) {
//           if (arr[a][b] === 1) one++;
//           else zero++;
//         }
//       }
//     }
//   }
// }

//해당 지역에 한개로 통일되었는지 안되었는지
function check(i, j, n, arr) {
  const first = arr[i][j];
  for (let a = i; a < i + n; a++) {
    for (let b = j; b < j + n; b++) {
      if (first !== arr[a][b]) return false;
    }
  }
  return true;
}

solution([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]);

/**
 * 일단 중간 값을 구함
 * 그 다음 0보다 큰지 확인
 *  0보다 크면 4구역으로 나눔
 *    구역마다 0보다 큰지 확인 반복
 *      0보다 안 크면 해당 구역은 더 이상 나눠지지 않음
 *        그럼 해당 구역이 0인지 1인지 확인
 *          숫자를 셋 값을 리턴
 *
 */
