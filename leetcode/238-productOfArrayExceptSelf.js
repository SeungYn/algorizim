/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const result = new Array(nums.length).fill(0);

  let product = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = product;
    product *= nums[i];
  }
  console.log(result);
  product = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= product;
    product *= nums[i];
  }
  console.log(result);

  return result;
};
