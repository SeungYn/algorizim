const fn = require('./concep2');
console.log(fn);

describe('이진 탐색 테스트', () => {
  let arr;

  test('[1,2,3,3,3,3,3,3,3,3,3] 배열에서 3의 시작 인덱스 끝 인덱스 찾기', () => {
    arr = [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3];
    expect(fn.lowerBound(arr, 0, arr.length - 1, 3)).toBe(2);
    expect(fn.upperBound(arr, 0, arr.length - 1, 3)).toBe(10);
  });
});
