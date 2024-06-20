/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = [];

  dfs(1, 1, []);

  function dfs(dep, index, currentArr) {
    if (dep > k) {
      return result.push([...currentArr]);
    }

    for (let i = index; i <= n; i++) {
      currentArr.push(i);
      dfs(dep + 1, i + 1, currentArr);
      currentArr.pop();
    }
  }

  return result;
};
