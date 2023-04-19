const fn = require('./concep.js');

describe('코테 문제 테스트', () => {
  let n = 10;
  let target = 7;
  const arr = [1, 3, 5, 7, 11, 13, 15, 17, 19];
  test('주어진 arr에서 7을 찾으면 1을 반환', () => {
    const result = fn(arr, 0, n - 1, target);

    expect(result).toBe(1);
  });

  test('배열에서 20을 못 찾으면 -1 을 반환', () => {
    const result = fn(arr, 0, n - 1, 20);

    expect(result).toBe(-1);
  });
});
