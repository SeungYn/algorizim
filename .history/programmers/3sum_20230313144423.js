function solution(arr) {
  const answer = [];

  console.log(arr);
}

solution([1, 2, -1, -2, 4, 0, -4]);
const nums = [1, 2, -1, -2, 4, 0, -4];
const ans = [];

for (let i = 0; i < nums.length - 1; i++) {
  const numsDict = {};

  for (let j = i + 1; j < nums.length; j++) {
    const complement = -nums[j];

    if (complement in numsDict) {
      const [x, y] = numsDict[complement];
      ans.push([x, y, j]);
    }
    console.log(numsDict);
    numsDict[nums[i] + nums[j]] = [i, j];
  }
}

console.log(ans);
