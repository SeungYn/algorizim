/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];

  dfs(0, 0, [], candidates);

  function dfs(index, sum, currentArr, candidates) {
    if (sum > target) {
      return;
    } else if (sum === target) {
      return result.push([...currentArr]);
    }

    for (let i = index; i < candidates.length; i++) {
      currentArr.push(candidates[i]);
      dfs(i, sum + candidates[i], currentArr, candidates);
      currentArr.pop();
    }
  }

  return result;
};
