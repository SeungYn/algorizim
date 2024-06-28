/**
 * 짝수를 이용한 풀이
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      sum += nums[i];
    }
  }

  return sum;
};

/**
 * 배열을 이용한 풀이
 * @param {number[]} nums
 * @return {number}
 */
// var arrayPairSum = function(nums) {
//     let arr = [];
//     nums.sort((a,b)=>a-b);
//     let sum = 0;
//     for(let a of nums){
//         arr.push(a);

//         if(arr.length === 2){
//             sum += Math.min(...arr);
//             arr = [];
//         }
//     }

//     return sum;
// };
