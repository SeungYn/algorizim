function solution(arr) {
  const answer = [];
  for (let i = 0; i < arr.length; i++) {
    const numDict = {};
    for (let j = i + 1; j < arr.length; j++) {
      const pivot = -arr[j];
      if (pivot in numDict) {
        const [x, y] = numDict[pivot];
        answer.push([x, y, j]);
      }

      numDict[arr[i] + arr[j]] = [i, j];
    }
  }
  console.log(answer);
}

solution([1, 2, -1, -2, 4, 0, -4]);

const nums = [1, 2, 2, 3, 4, 4];
const ans = [];

for (let i = 0; i < nums.length - 2; i++) {
  for (let j = i + 1; j < nums.length - 1; j++) {
    for (let k = j + 1; k < nums.length; k++) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
}

console.log(ans);
