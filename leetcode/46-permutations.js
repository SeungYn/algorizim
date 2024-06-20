/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = [];

  dfs(0, []);

  function dfs(dep, currentArr) {
    if (dep >= nums.length) {
      result.push([...currentArr]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (currentArr.includes(nums[i])) continue;
      currentArr.push(nums[i]);
      dfs(dep + 1, currentArr);
      currentArr.pop();
    }
  }

  return result;
};
