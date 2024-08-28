/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  if (gas.reduce((p, c) => c + p) < cost.reduce((p, c) => c + p)) return -1;

  let fuel = 0;
  let result = 0;

  // 만약 연료가 부족한 지점이 있다면 그 곳은 시작점으로 부적합 하다는 뜻 시작점을 다음 인덱스로 변경시킴
  for (let i = 0; i < gas.length; i++) {
    if (fuel + gas[i] - cost[i] < 0) {
      result = i + 1;
      fuel = 0;
    } else {
      fuel += gas[i] - cost[i];
    }
  }

  return result;
};
