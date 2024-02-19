function solution(n, info) {
  var answer = [];
  const arr = new Array(11).fill(0);
  const apeachValue = info
    .map((v, i) => (v > 0 ? 10 - i : 0))
    .reduce((a, b) => a + b);

  let [max, maxArr] = [0, []];

  function dfs(deps, count) {
    if (count === n) {
      let aValue = apeachValue;
      let rValue = 0;

      arr.forEach((v, i) => {
        if (info[i] !== 0 && v > info[i]) {
          rValue += 10 - i;
          aValue -= 10 - i;
        }
        if (info[i] === 0 && v !== 0) {
          rValue += 10 - i;
        }
      });

      if (max < rValue - aValue) {
        maxArr = [...arr];
        max = rValue - aValue;
      } else if (max === rValue - aValue) {
        for (let i = 10; i >= 0; i--) {
          if (maxArr[i] < arr[i]) {
            maxArr = [...arr];
            break;
          } else if (maxArr[i] > arr[i]) {
            break;
          }
        }
      }

      return;
    }

    for (let i = deps; i < arr.length; i++) {
      if (arr[i] > info[i]) continue;
      arr[i] += 1;
      dfs(i, count + 1);
      arr[i] -= 1;
    }
  }

  dfs(0, 0);
  if (max === 0 || maxArr.length === 0) return [-1];

  return maxArr;
}

solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]);
const a = [
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
];

// a.sort((x, y) => {
//   console.log(x, y);
//   for (let i = 0; i < x.length; i++) {
//     return y[i] - x[i];
//   }
// });
