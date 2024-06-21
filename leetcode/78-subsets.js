/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [[]];

  dfs(0, []);

  function dfs(index, currentArr) {
    if (currentArr.length > 0) result.push([...currentArr]);

    for (let i = index; i < nums.length; i++) {
      currentArr.push(nums[i]);
      dfs(i + 1, currentArr);
      currentArr.pop();
    }
  }

  return result;
};
