function solution(numbers, hand) {
  const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#'],
  ];
  const arrCoord = {
    0: [3, 1],
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
  };
  var answer = '';
  let [lf, rf] = [
    [3, 0],
    [3, 2],
  ];

  numbers.forEach((n) => {
    const numCoord = arrCoord[n];
    if ([1, 4, 7].includes(n)) {
      answer += 'L';
      lf = [...numCoord];
    } else if ([3, 6, 9].includes(n)) {
      answer += 'R';
      rf = [...numCoord];
    } else {
      const leftDistance =
        Math.abs(lf[0] - numCoord[0]) + Math.abs(lf[1] - numCoord[1]);
      const rightDistance =
        Math.abs(rf[0] - numCoord[0]) + Math.abs(rf[1] - numCoord[1]);

      if (rightDistance > leftDistance) {
        answer += 'L';
        lf = [...numCoord];
      } else if (rightDistance < leftDistance) {
        answer += 'R';
        rf = [...numCoord];
      } else {
        if (hand === 'right') {
          answer += 'R';
          rf = [...numCoord];
        } else {
          answer += 'L';
          lf = [...numCoord];
        }
      }
    }
  });

  return answer;
}
