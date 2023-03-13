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

const nums = [1, 2, -1, -2, 4, 0, -4];
const ans = [];

nums.sort((a, b) => a - b);

// for (let i = 0; i < nums.length - 2; i++) {
//   if (i > 0 && nums[i] === nums[i - 1]) continue;

//   let j = i + 1;
//   let k = nums.length - 1;

//   while (j < k) {
//     const sum = nums[i] + nums[j] + nums[k];

//     if (sum === 0) {
//       ans.push([i, j, k]);
//       j++;
//       k--;

//       while (j < k && nums[j] === nums[j - 1]) j++;
//       while (j < k && nums[k] === nums[k + 1]) k--;
//     } else if (sum < 0) {
//       j++;
//     } else {
//       k--;
//     }
//   }
// }

// console.log(ans);

for (let i = 0; i < nums.length - 2; i++) {
  if (i > 0 && nums[i] === nums[i - 1]) continue;
  for (let j = i + 1; j < nums.length - 1; j++) {
    if (j > i + 1 && nums[j] === nums[j - 1]) continue;

    for (let k = j + 1; k < nums.length; k++) {
      if (k > j + 1 && nums[k] === nums[k - 1]) continue;

      if (nums[i] + nums[j] + nums[k] === 0) {
        ans.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
}

console.log(ans);
